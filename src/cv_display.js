import CVEducationInfo from "./cv_educationInformation";

export default function CV({ info }) {

    return (
        <div>
            <header>
                <h2>{info.personalInfo.firstName + " " + info.personalInfo.lastName}</h2>
                <h5>Phone No.: {info.personalInfo.phoneNo}, E-mail: {info.personalInfo.email}, Address: {info.personalInfo.address}</h5>
            </header>
            <section>
                <h2>Education</h2>
                <CVEducationInfo info={info.educationInfo} />
            </section>
            <section>
                <h2>Experience</h2>
            </section>
        </div>
    )
}