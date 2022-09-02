import {EmployeeAccount, VendorAccount} from "../models/account";
import {Mail} from "../models/mail";

const rio: EmployeeAccount = {
    fullName: "Rio",
    department:"IT",
    email: "rio@company.com",
    address:"Jl. jaya",
    position:"Manager"}

const ja: VendorAccount = {
    fullName: "PT Jaya Abadi",
    address: "Jl. Ketapang",
    email: "admin@ja.com"
}


const inbox: Mail[] = [
    {from: ja, to: rio, subject:"Tender", date: "01/02/22", content:"Gimana jadi gak po?"}
]

export default inbox