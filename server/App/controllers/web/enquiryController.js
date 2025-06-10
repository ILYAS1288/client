const enquiryModel = require("../../models/enquiry.model");

let enquiryInsert = (req, res) => {
let {sName,sEmail,sPhone,sMessage}=req.body;
let enquiry= new enquiryModel ({
    name:sName,
    email:sEmail,
    phone:sPhone,
    message:sMessage
});
enquiry.save().then(()=>{
     res.send("Date Saved");
}).catch((err)=>{
res.send({status:0 , message:"Error ",error:err});
})

}
module.exports={enquiryInsert};