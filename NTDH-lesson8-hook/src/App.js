import './App.css';
import {React,useState} from 'react'
import NTDHListTask from './components/NTDHListTask';
import NTDHTaskAddOrEdit from './components/NTDHTaskAddOrEdit';

function App() {
    //mock data
    const tdd_listTasks = [
      { NTDH_taskId:2210900027,NTDH_taskName:"Nuyễn thị diễm hương", NTDH_level:"Small" },
      { NTDH_taskId:2, NTDH_taskName:"Học lập trình reactjs",NTDH_level:"Medium"},
      { NTDH_taskId:3, NTDH_taskName:"Lập trình với Frontend - Reactjs",NTDH_level:"High"},
      { NTDH_taskId:4, NTDH_taskName:"Lập trình Fullstack (PHP, Java, NetCore)",NTDH_level:"Small"},
    ]
    //sử dụng hàm usestate của hook để lưu trữ trạng thái dữ liệu
    const [NTDHListTasks,setNTDHListTasks] = useState(NTDH_listTasks);
    
    //tạo state dữ liệu cho form(add, edit)
    const NTDHTaksObj={
      NTDH_taskId:0, 
      NTDH_taskName:"",
      NTDH_level:""
  };
    //taoj state
    const [NTDHTask,setNTDHTask] = useState(NTDHTaksObj);//dữ liệu trên form
      // state đê phân biệt trạng thái là thêm mới hay sửa
  const [NTDHIsAddOrEdit, setNTDHIsAddOrEdit ] = useState(true); // mặc định ban đầu là form thêm mới

    //nhận dữ liệu khi sửa
    const NTDHHandleEdit =(param)=>{
      console.log("App-Edit:",param);
      //cập nhật lại NTDHTask
      setNTDHTask(param);
      // Cập nhật trạng thái form là sửa
    setNTDHIsAddOrEdit(false);
    };

    const NTDHHandleSubmit = (NTDHParam)=>{
      console.log("App:",NTDHParam);
      if(NTDHIsAddOrEdit===true){ // trường hợp thêm mới dữ liệu
        setNTDHListTasks((prev) => {
          return [...prev, NTDHParam];
        });
      }else{ // Trường hợp sử dữ liệu
        for (let i = 0; i < NTDHListTasks.length; i++) {
            if(NTDHListTasks[i].NTDH_taskId == NTDHParam.NTDH_taskId){
              NTDHListTasks[i] = NTDHParam;
              break;
            }
        }
        // Cập nhật lại state (NTDHListTasks)
      setNTDHListTasks(prev=>{
        return[
          ...prev,
          NTDHParam
        ]
    })
    }
    // Hàm xóa
  const NTDHHandleDelete = (param)=>{
    let NTDHResult = NTDHListTasks.filter(x=>x.NTDH_taskId != param.NTDH_taskId);
    setNTDHListTasks(NTDHResult);
  }
    
    return (
      <div className="container border">
        <h1>Nguyễn Thị Diễm Hương</h1>
        <hr/>
        <div>
          {/* {danh sách list task} */}
          <NTDHListTask renderNTDHListTasks ={NTDHListTasks} 
                      onNTDHTaskEdit = {NTDHHandleEdit}
                      onNTDHTaskDelete={NTDHHandleDelete}
          />
        </div>
        <div>
          <NTDHTaskAddOrEdit 
           renderNTDHIsAddOrEdit = {NTDHIsAddOrEdit}
            renderNTDHTask = {NTDHTask}
            NTDHOnSubmit={NTDHHandleSubmit} />
        </div>
      </div>
      
    );
}
}
export default App;
