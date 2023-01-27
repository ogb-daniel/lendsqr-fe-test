const briefcase =  require('./images/briefcase.png');
const home =  require('./images/home.png');
const users =  require('./images/users.png');
const guarantors =  require('./images/guarantors.png');
const loans =  require('./images/loans.png');
const handshake =  require('./images/handshake.png');
const piggy =  require('./images/piggy.png');
const loan =  require('./images/loan.png');
const whitelist =  require('./images/whitelist.png');
const karma =  require('./images/karma.png');
const busbriefcase =  require('./images/busbriefcase.png');
const bank =  require('./images/bank.png');
const coins =  require('./images/coins.png');
const transactions =  require('./images/transactions.png');
const services =  require('./images/services.png');
const serviceaccount =  require('./images/serviceaccount.png');
const settlements =  require('./images/settlements.png');
const reports =  require('./images/reports.png');
const preferences =  require('./images/preferences.png');
const fees =  require('./images/fees.png');
const audit =  require('./images/audit.png');

const customers = [
    {
        name:'Users',
        icon:users
    },
    
    {
        name:'Guarantors',
        icon:guarantors
    },
    
    {
        name:'Loans',
        icon:loans
    },
    
    {
        name:'Decision Models',
        icon:handshake
    },
    
    {
        name:'Savings',
        icon:piggy
    },
    
    {
        name:'Loan Requests',
        icon:loan
    },
    
    {
        name:'Whitelist',
        icon:whitelist
    },
    
    {
        name:'Karma',
        icon:karma
    },
    
]

const businesses = [
    {
        name:'Organization',
        icon: busbriefcase
    },
    {
        name:'Loan Products',
        icon: loan
    },
    {
        name:'Savings Products',
        icon: bank
    },
    {
        name:'Fees and Charges',
        icon: coins
    },
    {
        name:'Transactions',
        icon: transactions
    },
    {
        name:'Services',
        icon: services
    },
    {
        name:'Service Account',
        icon: serviceaccount
    },
    {
        name:'Settlements',
        icon: settlements
    },
    {
        name:'Reports',
        icon: reports
    },
]

const settings = [
    {
        name:'Preferences',
        icon:preferences
    },
    {
        name:'Fees and Pricing',
        icon:fees
    },
    {
        name:'Audit Logs',
        icon:audit
    },
]

export {customers,businesses,settings}