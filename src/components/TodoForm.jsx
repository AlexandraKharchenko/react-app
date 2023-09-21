import Button from 'react-bootstrap/Button';
import FormLabel from 'react-bootstrap/FormLabel';
import FormGroup from 'react-bootstrap/FormLabel'
import * as Yup from 'yup';
import {Formik, Field, Form, ErrorMessage} from 'formik';
import {useDispatch} from "react-redux";
import {addTodo, deleteTodos} from "../store/slices/todoItems";
import Container from "react-bootstrap/Container";

const TodoForm = () => {
    const TodoSchema = Yup.object().shape({
        title: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required'),
        description: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required'),
    });
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteTodos())
    }
    return (
        <>
            <Formik initialValues={{
                title: '',
                description: '',
            }}
                    validationSchema={TodoSchema}
                    onSubmit={(values, formikBag) => {
                        dispatch(addTodo({title: values.title, description: values.description}))
                        formikBag.resetForm()
                    }}
            >
                {({ touched, errors }) => (
                <Form>
                    <FormGroup className="mb-3">
                        <FormLabel htmlFor="title">Task title</FormLabel>
                        <Field type="text" name="title" className={`form-control ${touched.title && errors.title ? "is-invalid" : " "}`} />
                        <ErrorMessage name="title" component="div" style={{color: "red"}}/>
                    </FormGroup>
                    <FormGroup className="mb-4">
                        <FormLabel htmlFor="description">Task body</FormLabel>
                        <Field as="textarea" name="description" placeholder="Task body"
                               className={`form-control ${touched.description && errors.description ? "is-invalid" : " "}`}
                               cols={60}
                               rows={10}
                        />
                        <ErrorMessage name="description" component="div" style={{color: "red"}}/>
                    </FormGroup>
                    <Container className="d-flex justify-content-start">
                        <Button variant="primary" type="submit" className="m-2">Create Task!</Button>
                        <Button variant="warning" type="reset" className="m-2">Очистить</Button>
                        <Button variant="danger" className="m-2" onClick={handleDelete}>Удалить все</Button>
                    </Container>
                </Form>)}
            </Formik>
        </>
    )
}
export default TodoForm