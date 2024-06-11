import React, { useEffect, useState } from 'react'

export default function NTDHTaskAddOrEdit({renderNTDHTask,renderNTDHIsAddOrEdit,NTDHOnSubmit}) {
    //đối tượng task
    // const NTDHTaskObj={
    //     NTDH_taskId:0, 
    //     NTDH_taskName:"",
    //     NTDH_level:""
    // }
    const [NTDHTask,setNTDHTask] = useState(renderNTDHTask);
    useEffect(()=>{
        setNTDHTask(renderNTDHTask)
    },[renderNTDHTask])

     // tạo tiêu đề form
     const NTDHTieude = renderNTDHIsAddOrEdit==true?"Thêm mới task":"Sửa thông tin task";
    //hàm xử lý sự kiện thay đổi trên điều khiển
    const NTDHHandleChange = (NTDHEvent) => {
        let name = NTDHEvent.target.name;
        let value = NTDHEvent.target.value;
        setNTDHTask(prev=>{
            return{
                ...prev,
                [name]: value,
            }
            
        })
    }
    console.log(NTDHTask);
    const NTDHHandleSubmit =(NTDHEvent)=>{
        NTDHEvent.preventDefault();
        NTDHOnSubmit(NTDHTask);
    }
  return (
    <div>
        <h2>{NTDHTieude}</h2>
        <form>
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Task ID</span>
                <input 
                name='NTDH_taskId' value={NTDHTask.NTDH_taskId} onChange={NTDHHandleChange} 
                type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon2">Task Name</span>
                <input 
                name='NTDH_taskName' value={NTDHTask.NTDH_taskName} onChange={NTDHHandleChange} 
                type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon2" />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon3">Task Level</span>
                <select name='NTDH_level' value={NTDHTask.NTDH_level} onChange={NTDHHandleChange} className="form-control" 
                placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon3"> 
                <option value={'Small'}>Small</option>
                <option value={'Medium'}>Medium</option>
                <option value={'High'}>High</option>
                </select>
            </div>
            <button onClick={NTDHHandleSubmit} classNameName='btn btn-primary'>Ghi Lại</button>
        </form>
    </div>
  )
}
