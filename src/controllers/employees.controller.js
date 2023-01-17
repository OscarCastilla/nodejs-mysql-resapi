import {pool} from '../db.js'


export const getEmployees=async(req,res)=>{

    try{
        const [rows]=await pool.query('SELECT *FROM EMPLOYEE');
        res.json(rows);
    }catch(error){
        return res.status(500).json({
            message:'Something goes wrong'
        })
    }


}

export const getEmployee=async(req,res)=>{

    try{
        console.log(req.params.id)
        const [rows]=await pool.query("SELECT *FROM employee WHERE id=?",[req.params.id])
        console.log(rows);
    
        if(rows.length <= 0 ) return res.status(404).json({
            message:'Employee not found'
        })

        res.json(rows[0])

    }catch(error){
        return res.status(500).json({
            message:'Something goes wrong'
        })
    }

    

}

export const createEmployee =async(req,res)=>{


    try{
        
        const {name,salary} =req.body;
        const [rows]= await pool.query('INSERT INTO employee (name,salary) VALUES (?,?)',[name,salary])
         res.send({     
             ID:rows.insertId,
             name,
             salary,
         
         });

    }catch(error){
        return res.status(500).json({
            message:'Something goes wrong'
        })
    }


  


};



export const deleteEmployee=async(req,res)=>{

    try{

        const [result]=await pool.query("DELETE FROM EMPLOYEE WHERE id=?",[req.params.id])

        if(result.affectedRows<=0){
            return   res.status(404).json({mesasage:"Employe no found"})
        }
        res.sendStatus(204);

    }catch(error){
        return res.status(500).json({
            message:'Something goes wrong'
        })
    }

     
}



export const updateEmployee=async(req,res)=>{
    const {id}=req.params
    const {name,salary}=req.body;

    try{
    const [result]=await pool.query('UPDATE EMPLOYEE SET NAME=IFNULL(?,name),salary=IFNULL(?,salary) WHERE id=?',[name,salary,id])

    if(result.affectedRows===0) return res.status(404).json({

        messagge:"employee no foudn "
    })

    const [rows]= await  pool.query('SELECT *FROM EMPLOYEE WHERE ID=?',[id])
    res.json(rows[0]);

    }catch(error){
        return res.status(500).json({
            message:'Something goes wrong'
        })
    }

    

   

}


