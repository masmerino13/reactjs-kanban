import React, { useRef } from "react"
import PropTypes from "prop-types"
import _ from "lodash"
import { Formik, Field, Form } from 'formik'
import { useStoreActions, useStoreState } from 'easy-peasy'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { Dialog } from '../Dialog'

import "./addTaskDialog.scss"

const AddTaskDialog = ({ show, setShow }) => {
  const formRef = useRef()
  const handleClose = () => setShow(false)

  const saveTask = useStoreActions(actions => actions.tasks.createTask)
  const list = useStoreState((state) => state.collections.list)
  const initialise = useStoreActions(actions => actions.initialise)

  const handleSaveTask = async (data, { resetForm }) => {
    const todoList = list.find(co => co.key === 'to-do')
    
    data.order = todoList.items.length + 1

    const { status } = await saveTask(data)

    if (status === 'success') {
      toast.success('The new task was added successsfully')

      initialise()
      resetForm({})
      setShow(false)

      return
    }

    toast.error('Ouch! Error creating the new task.')
  }

  return (
    <>
      <Dialog
        show={show}
        onHide={handleClose}
        title= 'Add new task'
        onSuccessLabel= 'Add task'
        onSuccessAction={() => {
          if (formRef.current) {
            formRef.current.handleSubmit()
          }
        }}
      >
        <Formik
          innerRef={formRef}
          initialValues={{
            title: 'Do this task number',
            description: 'Lorem upsum text here',
            assignee: 'Jon Doe',
            due: 1605922941695,
            tag: 'seo-article',
          }}
          onSubmit={handleSaveTask}
        >
          <Form className='t_TaskForm'>
            <label htmlFor="title">Title</label>
            <Field id="title" name="title" placeholder="Task title" />

            <label htmlFor="description">Description</label>
            <Field id="description" name="description" placeholder="Task description" />

            <label htmlFor="assignee">Assigne To</label>
            <Field id="assignee" name="assignee" placeholder="Jhon Doe" />

            <label htmlFor="due">Due Date</label>
            <Field id="due" name="due" type={"number"}/>

            <label htmlFor="tag">Tag</label>
            <Field as="select" name="tag">
              <option value="seo-article">SEO article</option>
              <option value="long-form">Long form</option>
              <option value="blog-post">Blog post</option>
            </Field>
          </Form>
        </Formik>
      </Dialog>
      <ToastContainer />
    </>
  )
}

AddTaskDialog.propTypes = {
  show: PropTypes.bool.isRequired,
  setShow: PropTypes.func.isRequired,
}

export default AddTaskDialog
