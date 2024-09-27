import React from 'react'
import '../style/Common.css'
import { useForm } from 'react-hook-form'
function Register() 
{
    const {register,handleSubmit,reset,setValue}=useForm();

    function onhandleSubmit(data)
    {
        console.log(data)
    }
    const clear=()=>reset();
    const dummyUser={
        fullname:'mona',
        contactNumber:898922299,
        age:26,
        address:'mumbai',
        emailid:'mk@gmail.com',
        courseInfo:{
            Name:'java',
            Timing:'2-7',
            Duration:'8Months',
            Fees:90000,
        },
        bankInfo:{
            BankName:'sbi',
            AccountNumber:9087654,
            BranchName:'Awadh',
            ifsccode:'Sbiin7899'
        }
    }
    function toUpdate()
    {
       for(let prop in dummyUser){
            setValue(prop,dummyUser[prop])
        }
        // setValue('bankInfo.ifsccode',dummyUser.bankInfo.ifsccode)
    }
  return (
    <div className='container' style={{
        margin:'50px',
        padding:'20px',
        
        }}>
        <form onSubmit={handleSubmit(onhandleSubmit)}>
            <div>
                <label>Enter Full Name:-</label>
                <input type='text'{...register('fullname') }placeholder='Enter Full Name'/>
            </div>
            <div>
                <label>Enter Contact-Number:-</label>
                <input type='text'{...register('contactNumber')}placeholder='Enter Contact-Number'/>
            </div>
            <div>
                <label>Enter Age:-</label>
                <input type='text'{...register('age')}placeholder='Enter Age'/>
            </div>
            <div>
                <label>Enter Address:-</label>
                <input type='text'{...register('address')}placeholder='Enter Address'/>
            </div>
            <div>
                <label>Enter Email-id:-</label>
                <input type='text'{...register('emailid')} placeholder='Enter Eamil-id'/>
            </div>
            <div>
                <label>Enter Course Name:-</label>
                <input type='text'{...register('courseInfo.Name')}placeholder='Enter Course Name'/>
            </div>
            <div>
                <label>Enter Course Timing:-</label>
                <input type='text'{...register('courseInfo.Timing')}placeholder='Enter Course Timing'/>
            </div>
            <div>
                <label>Enter Course Duration:-</label>
                <input type='text'{...register('courseInfo.Duration')}placeholder='Enter Course Duration'/>
            </div>
            <div>
                <label>Enter Course Fees:-</label>
                <input type='text'{...register('courseInfo.Fees')}placeholder='Enter Course Fees'/>
            </div>
            <div>
                <label>Enter Bank Name:-</label>
                <input type='text'{...register('bankInfo.BankName')}placeholder='Enter BankName'/>
            </div>
            <div>
                <label>Enter Account Number:-</label>
                <input type='text'{...register('bankInfo.AccountNumber')}placeholder='Enter Account Number'/>
            </div>
            <div>
                <label>Enter Branch Name:-</label>
                <input type='text'{...register('bankInfo.BranchName')}placeholder='Enter Branch Name'/>
            </div>
            <div>
                <label>Enter ifsc-code:-</label>
                <input type='text'{...register('bankInfo.ifsccode')}placeholder='Enter ifsc-code'/>
            </div>
            <button>Submit</button><br/>
            <button onClick={toUpdate}>Edit</button><br/>
            <button onClick={clear}>Reset</button><br/>
        
        </form>
    </div>
  )
}

export default Register