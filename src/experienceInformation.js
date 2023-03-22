export default function ExperienceInfo({ info, onInputChange, onDeleteButtonClick }) {
    return(
        Object.keys(info).map((key) => {
            return <ExperienceInputs key={key} keyValue={key} info={info[key]} onInputChange={onInputChange} onDeleteButtonClick={onDeleteButtonClick} />
        })
    );
    
}

function ExperienceInputs({keyValue, info, onInputChange, onDeleteButtonClick}) {
    const {position, company, city, start, end} = info;
    
    return(
        <section>
            <input type="text" value={position} name="position" placeholder='position' onChange={(event) => onInputChange(keyValue, event.target.name, event.target.value)} />
            <input type="text" value={company} name="company" placeholder='company' onChange={(event) => onInputChange(keyValue, event.target.name, event.target.value)} />
            <input type="text" value={city} name="city" placeholder='city' onChange={(event) => onInputChange(keyValue, event.target.name, event.target.value)} />
            <input type="text" value={start} name="start" placeholder='start' onChange={(event) => onInputChange(keyValue, event.target.name, event.target.value)} />
            <input type="text" value={end} name="end" placeholder='end' onChange={(event) => onInputChange(keyValue, event.target.name, event.target.value)} />
            <button type="button" onClick={(event) => onDeleteButtonClick(keyValue, 'experienceInfo')}>Delete</button>
        </section>
    )
}