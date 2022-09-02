interface Account {
    fullName: string;
    address: string;
    email: string;
}

interface EmployeeAccount extends Account {
    department: string;
    position: string;
}

interface VendorAccount extends Account {}


export type {
    Account,
    EmployeeAccount,
    VendorAccount
}