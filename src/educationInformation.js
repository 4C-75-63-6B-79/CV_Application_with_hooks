export default function EducationInfo({ info, onInputChange, onDeleteButtonClick }) {
    return(
        Object.keys(info).map((key) => {
            return <EducationInputs key={key} keyValue={key} info={info[key]} onInputChange={onInputChange} onDeleteButtonClick={onDeleteButtonClick} />
        })
    );
    
}

function EducationInputs({keyValue, info, onInputChange, onDeleteButtonClick}) {
    const {degree, school, city, subject, start, end} = info;
    
    return(
        <section>
            <input type="text" value={degree} name="degree" placeholder='degree' onChange={(event) => onInputChange(keyValue, event.target.name, event.target.value)} />
            <input type="text" value={school} name="school" placeholder='school' onChange={(event) => onInputChange(keyValue, event.target.name, event.target.value)} />
            <input type="text" value={city} name="city" placeholder='city' onChange={(event) => onInputChange(keyValue, event.target.name, event.target.value)} />
            <input type="text" value={subject} name="subject" placeholder='subject' onChange={(event) => onInputChange(keyValue, event.target.name, event.target.value)} />
            <input type="text" value={start} name="start" placeholder='start' onChange={(event) => onInputChange(keyValue, event.target.name, event.target.value)} />
            <input type="text" value={end} name="end" placeholder='end' onChange={(event) => onInputChange(keyValue, event.target.name, event.target.value)} />
            <button type="button" onClick={(event) => onDeleteButtonClick(keyValue, 'educationInfo')}>Delete</button>
        </section>
    )
}