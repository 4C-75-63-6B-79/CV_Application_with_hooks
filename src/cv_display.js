import CVEducationInfo from "./cv_educationInformation";
import CVExperiencenInfo from "./cv_experience";

export default function CV({ info }) {

    return (
        <div>
            <header>
                <h2>{info.personalInfo.firstName + " " + info.personalInfo.lastName}</h2>
                <h4>{info.personalInfo.phoneNo ? "Phone No.: " + info.personalInfo.phoneNo + ", " : undefined} {info.personalInfo.email ? "Email: " + info.personalInfo.email + ", " : undefined} {info.personalInfo.address? "Address: " + info.personalInfo.address + ", " : undefined}</h4>
            </header>
            <section>
                <h2>Education</h2>
                <CVEducationInfo info={info.educationInfo} />
            </section>
            <section>
                <h2>Experience</h2>
                <CVExperiencenInfo info={info.experienceInfo} />
            </section>
        </div>
    )
}