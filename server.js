const express=require('express');
const path=require('path');
const app=express();
app.use(express.json());
app.use(express.static(path.join(__dirname,'public')));
app.get('/api/status',(req,res)=>res.json({store:'Ponto Braz',status:'preparacao',paymentsConfigured:Boolean(process.env.MP_ACCESS_TOKEN),supplier:'aguardando aprovacao'}));
app.post('/api/checkout',(req,res)=>res.status(503).json({error:'Checkout ainda não está ativo. Configure o Mercado Pago e cadastre produtos autorizados antes de vender.'}));
const port=process.env.PORT||3000;
app.listen(port,()=>console.log(`Ponto Braz disponível em http://localhost:${port}`));
