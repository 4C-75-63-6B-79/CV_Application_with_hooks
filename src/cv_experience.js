export default function CVExperiencenInfo({ info }) {

    return (
        <div>
            {
                Object.keys(info).map((key) => {
                    return < IndividualExperienceInfo key={key} info={info[key]} />
                })
            }
        </div>
    )

}

function IndividualExperienceInfo({info}) {
    const {position, company, city, start, end} = info;
    return(
        <div>
            <div id="duration">{start} - {end}</div>
            <div id="textInfo">
                <h3>{position}</h3>
                <h4>{company}, {city}</h4>
            </div>
        </div>
    )
}