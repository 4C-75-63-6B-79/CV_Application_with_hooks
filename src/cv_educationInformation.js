export default function CVEducationInfo({ info }) {

    return (
        <div>
            {
                Object.keys(info).map((key) => {
                    return < IndividualEducationInfo key={key} info={info[key]} />
                })
            }
        </div>
    )

}

function IndividualEducationInfo({info}) {
    const {degree, school, city, subject, start, end} = info;
    return(
        <div>
            <div id="duration">{ start || end ? start + "-" + end : undefined}</div>
            <div id="textInfo">
                <h3>{school}</h3>
                <h4>{subject || degree ? subject + ", " + degree : undefined}</h4>
                <h4>{city}</h4>
            </div>
        </div>
    )
}