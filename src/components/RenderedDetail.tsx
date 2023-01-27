import React from 'react'
import { Card } from './Card';

interface RenderedDetailProps {
    renderedId:number;
    user:any;
}

export const RenderedDetail: React.FC<RenderedDetailProps> = ({user,renderedId}) => {
        
    return (
        <Card>
            <div>
         
            <h3>Personal Information</h3>
            <div className='personal'>
                <div>
                    <p>full name</p>
                    <p>{user.profile.firstName + " " + user.profile.lastName}</p>
                </div>
                <div>
                    <p>phone number</p>
                    <p>{user.profile.phoneNumber}</p>
                </div>
                <div>
                    <p>email address</p>
                    <p>{user.email}</p>
                </div>
                <div>
                    <p>bvn</p>
                    <p>{user.profile.bvn}</p>
                </div>
                <div>
                    <p>gender</p>
                    <p>{user.profile.gender}</p>
                </div>
                <div>
                    <p>marital status</p>
                    <p>Single</p>
                </div>
                <div>
                    <p>children</p>
                    <p>none</p>
                </div>
                <div>
                    <p>type of residence</p>
                    <p>{user.profile.address}</p>
                </div>
         
            </div>
                   
            </div>
            <div>

            <h3>Education and Employment</h3>
            <div className='personal'>
            <div>
                    <p>level of education</p>
                    <p>{user.education.level}</p>
                </div>
                <div>
                    <p>employment status</p>
                    <p>{user.education.employmentStatus}</p>
                </div>
                <div>
                    <p>sector of employment</p>
                    <p>{user.education.sector}</p>
                </div>
                <div>
                    <p>duration of employment</p>
                    <p>{user.education.duration}</p>
                </div>
                <div>
                    <p>office email</p>
                    <p>{user.education.officeEmail}</p>
                </div>
                <div>
                    <p>monthly income</p>
                    <p>${user.education.monthlyIncome[0] + " - " + "$"+user.education.monthlyIncome[1] } </p>
                </div>
                <div>
                    <p>loan repayment</p>
                    <p>{user.education.loanRepayment}</p>
                </div>
            </div>
            </div>
            <div>
            <h3>Socials</h3>
            <div className='personal'>
            <div>
                    <p>twitter</p>
                    <p>{user.socials.twitter}</p>
                </div>
                <div>
                    <p>facebook</p>
                    <p>{user.socials.facebook}</p>
                </div>
                <div>
                    <p>instagram</p>
                    <p>{user.socials.instagram}</p>
                </div>
            </div>
            </div>
            <div>
            <h3>Guarantor</h3>
            
            <div className='personal'>
            <div>
                    <p>full name</p>
                    <p>{user.guarantor.firstName + " " + user.guarantor.lastName}</p>
                </div>
                <div>
                    <p>phone number</p>
                    <p>{user.guarantor.phoneNumber}</p>
                </div>
                <div>
                    <p>email address</p>
                    <p>{user.guarantor.firstName}@gmail.com</p>
                </div>
                <div>
                    <p>relationship</p>
                    <p>Sister</p>
                </div>
            </div>
            </div>
        </Card>
        );
}