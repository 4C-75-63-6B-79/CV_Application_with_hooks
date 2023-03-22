export default function PersonalInfo({ info, onInputChange }) {

    function inputValueChange(event) {
        const attributeName = event.target.name;
        const attributeValue = event.target.value;
        onInputChange(attributeName, attributeValue);
    }

    return(
        <>
            <input type='text' name="firstName" value={info.firstName} placeholder="first name" onChange={inputValueChange}/>
            <input type='text' name="lastName" value={info.lastName} placeholder="last name" onChange={inputValueChange}/>
            <input type='text' name="address" value={info.address} placeholder="address" onChange={inputValueChange}/>
            <input type='text' name="email" value={info.email} placeholder="email" onChange={inputValueChange}/>
            <input type='text' name="phoneNo" value={info.phoneNo} placeholder="phone number" onChange={inputValueChange}/>
        </>
    )
}