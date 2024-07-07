import { useState, useEffect } from "react"
import { createUser } from "../apis/users";
import { Button, Modal, Form, Input, Select } from 'antd'
import "./index.css"

const { Option } = Select

const CreateUser = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [age, setAge] = useState(null)
    const [employmentStatus, setEmploymentStatus] = useState("Unemployed")
    const [maritalStatus, setMaritalStatus] = useState("Single")
    const [loading, setLoading] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const employmentOptions = [{
        value: "Unemployed",
        key: "unemployed",
    },
    {
        value: "Employed",
        key: "Employed",
    }
    ]

    const maritalOptions = [{
        value: "Single",
        key: "Single",
    },
    {
        value: "Married",
        key: "Married",
    },
    {
        value: "Divorced",
        key: "Divorced",
    }
    ]

    return (
        <>
            <div className="create-button">
                <Button type="primary" onClick={() => showModal()}>Create New User</Button>
            </div>
            <Modal
                title="User Submission Form"
                centered
                open={isModalOpen}
                okText="Submit"
                onOk={handleOk}
                onCancel={handleCancel}
            >
                <Form
                    name="basic"
                    labelCol={{
                        span: 6,
                    }}
                    wrapperCol={{
                        span: 12,
                    }}
                    style={{
                        padding: '20px',
                        textAlign: 'center'
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Name"
                        name="name"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your name!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your email!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Age"
                        name="age"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your age!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Employment"
                        name="employment"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your employment status!',
                            },
                        ]}
                    >
                        <Select>
                            {employmentOptions.map((employmentOption, index) =>
                                <Option value={employmentOption.value} />
                            )}
                        </Select>
                    </Form.Item>
                    <Form.Item
                        label="Marital"
                        name="marital"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your marital status!',
                            },
                        ]}
                    >
                        <Select>
                            {maritalOptions.map((maritalOption, index) =>
                                <Option value={maritalOption.value} />
                            )}
                        </Select>
                    </Form.Item>

                </Form>
            </Modal>
        </>
    )
}

export default CreateUser;