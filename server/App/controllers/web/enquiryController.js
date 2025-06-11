const enquiryModel = require("../../models/enquiry.model");

let enquiryInsert = (req, res) => {
    let { name, email, phone, message } = req.body;
    let enquiry = new enquiryModel({
        name,
        email,
        phone,
        message
    });
    enquiry.save().then(() => {
        res.send("Date Saved");
    }).catch((err) => {
        res.send({ status: 0, message: "Error ", error: err });
    })
  

}
  let enquiryList =async (req,res)=>{
        let enquiry=await enquiryModel.find();
        res.send({status:1,enquiryList:enquiry});
    }


module.exports = { enquiryInsert, enquiryList };