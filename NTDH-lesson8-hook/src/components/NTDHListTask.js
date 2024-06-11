import React from 'react'

export default function NTDHListTask({renderNTDHListTasks,onNTDHTaskEdit,onNTDHTaskDelete}) {
    console.log(renderNTDHListTasks);
    // Hàm xử lý khi sửa
    const NTDHHandleEdit = (param)=>{
        console.log("Click edit:", param);
        onNTDHTaskEdit(param) //Đẩy lên App thông qua props (onNTDHTaskEdit)
    }
    // Hàm xử lý khi xóa
    const NTDHHandleDelete = (param)=>{
        if(window.confirm('Bạn có chắc chắn xóa không')){
            onNTDHTaskDelete(param) // Đẩy dữ liệu xóa lên trên App.js
        }
    }
    //render data
    let NTDHElementTask = renderNTDHListTasks.map((task, index)=>{
        return(
            <>
                <tr key={index}>
                    <td>{index+1}</td>
                    <td>{task.NTDH_taskId}</td>
                    <td>{task.NTDH_taskName}</td>
                    <td>{task.NTDH_level}</td>
                    <td>
                        <button className='btn btn-success'
                        onClick={()=>NTDHHandleEdit(task)}
                        >Edit</button>
                        <button className='btn btn-danger'
                        onClick={()=>NTDHHandleDelete(task)}
                        >Remove</button>
                    </td>
                </tr>
            </>
        )
    })
  return (
    <div>
        <h2>Danh sách các nhiệm vụ</h2>
        <table className='table table-bordered'>
            <thead>
                <th>STT</th>
                <th>Task Id</th>
                <th>Task Name</th>
                <th>Task Level</th>
            </thead>
            <tbody>
                {NTDHElementTask}
            </tbody>
        </table>
    </div>
  )
}
