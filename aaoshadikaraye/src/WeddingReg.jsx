import { NavBar } from "./Lander";
import './CSS/weddingReg.css';
import Footer from "./Templates/footer";
import LogoRingPink from './Images/icons8-wedding-ring-64-pink.png'
import WeddingCategoriesSection from "./Components/WeddingCategoriesSection";
import { useState } from "react";
import axios from "axios";
import { useAuth } from "./context/UserContext";
import { useWedding } from "./context/weddingContext";
import { Toaster ,toast } from "react-hot-toast";
import CountdownTimer from "./Components/CountDownTimer";
import {
    Button,
    DatePicker,
    Form,
    Input,
    Select,
} from 'antd';

function WeddingReg() {
    
    const[weduser,setWedUser] = useWedding();
    const [user, authUser] = useAuth();
    const { RangePicker } = DatePicker;

    const formItemLayout = {
        labelCol: {
            xs: { span: 24 },
            sm: { span: 6 },
        },
        wrapperCol: {
            xs: { span: 24 },
            sm: { span: 14 },
        },
    };

    const [form] = Form.useForm();

    const [formData, setFormData] = useState({
        WedName: '',
        WedDate: '',
        City: '',
        type: '',
        email:user.email,
    });

    function onChange(name, value) {
        setFormData({ ...formData, [name]: value });
    }
    const [constent,setContest] = useState('');
    async function handleSubmit(values) {
        
        try{
            const ans = await axios.post('https://aaoshadikaraye.onrender.com/Wedding/Reg',formData);
            if(ans.data._id){
             setWedUser(ans.data);
             localStorage.setItem('wed',JSON.stringify(ans.data));
            }
            else{
             toast.error('Email Already exsist')
            }
           }
           catch (error) {
            console.log("Failed Reg")
             }
    }

    return (
        <>
        <div><Toaster></Toaster></div>
            <NavBar />
            <div className="WedRegMain">
                <div className="WedRegMainSub">
                    {weduser ? <div className="Count"><CountdownTimer></CountdownTimer><div className="SubDiv"></div></div>:
                    <Form {...formItemLayout} variant="filled" style={{ maxWidth: 600, marginTop: '30px', marginLeft: "20px" }} form={form} onFinish={handleSubmit}>
                        <Form.Item label="WedName" name="WedName" rules={[{ required: true, message: 'Please input!' }]}>
                            <Input onChange={(e) => onChange('WedName', e.target.value)} />
                        </Form.Item>

                        <Form.Item label="City" name="City" rules={[{ required: true, message: 'Please input!' }]}>
                            <Input onChange={(e) => onChange('City', e.target.value)} />
                        </Form.Item>

                        <Form.Item label="type" name="type" rules={[{ required: true, message: 'Please input!' }]}>
                            <Select onChange={(value) => onChange('type', value)}>
                                <Select.Option value="Bride">Bride</Select.Option>
                                <Select.Option value="Groom">Groom</Select.Option>
                            </Select>
                        </Form.Item>

                        <Form.Item
                            label="WedDate"
                            name="WedDate"
                            rules={[{ required: true, message: 'Please input!' }]}
                        >
                            <DatePicker onChange={(date, dateString) => onChange('WedDate', dateString)} />
                        </Form.Item>

                        <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
                            <Button type="primary" htmlType="submit" style={{ backgroundColor: '#FF90BC' }}>
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>}
                </div>
            </div>
            <WeddingCategoriesSection />
            <Footer />
        </>
    );
}

export default WeddingReg;
