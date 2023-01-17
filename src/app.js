import express from 'express'
import employeesRoutes  from './routes/employees.route.js'
import  indexRoutes from  './routes/index.route.js'

const app=express();
app.use(express.json())

app.use('/api',employeesRoutes)
app.use(indexRoutes);


app.use((req,res,next)=>{
        res.status(404).json({
            message:'endpoint Not Found'
        })
})

export default app;