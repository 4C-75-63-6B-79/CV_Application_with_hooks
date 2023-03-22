import './App.css';

import { useState } from 'react';
import PersonalInfo from './personalInformation';
import EducationInfo from './educationInformation';
import ExperienceInfo from './experienceInformation';
import CV from './cv_display';

function makeInitialInfo() {
  const initInfo = {
    personalInfo: {
      firstName: '',
      lastName: '',
      address: '',
      email: '',
      phoneNo: '',
    },
    educationInfo: {
      education0: {
        degree: '',
        school: '',
        city: '',
        subject: '',
        start: '',
        end: ''
      }
    },
    experienceInfo: {
      experience0: {
        position: "",
        company: "",
        city: "",
        start: "",
        end: "",
      }
    }
  }

  return initInfo;
}

function App() {

  const [info, setInfo] = useState(makeInitialInfo);

  function updatePersonalInfo(attributeName, attributeValue) {
    setInfo({
      ...info,
      personalInfo: {
        ...info.personalInfo,
        [attributeName]: attributeValue
      }
    });
  }

  function updateEducationInfo(index, attributeName, attributeValue) {
    setInfo({
      ...info,
      educationInfo: {
        ...info.educationInfo,
        [index]: {
          ...info.educationInfo[index],
          [attributeName]: attributeValue
        }
      }
    });
  }

  function updateExperienceInfo() {
    
  }

  function addButtonClicked(category) {
    const emptyEducationInfo = {
      degree: '',
      school: '',
      city: '',
      subject: '',
      start: '',
      end: ''
    }
    const emptyExperienceInfo = {
      position: "",
      company: "",
      city: "",
      start: "",
      end: "",
    }
    const numberOfEducationPresent = Object.keys(info.educationInfo).length;
    const numberOfExperiencePresent = Object.keys(info.experienceInfo).length;
    const newEducationKey = `education${numberOfEducationPresent}`;
    const newExperienceKey = `experience${numberOfExperiencePresent}`;
    if(category === 'education') {
      setInfo({
        ...info,
        educationInfo: {
          ...info.educationInfo,
          [newEducationKey]: emptyEducationInfo
        }
      });
    } else if(category === 'experience') {
      setInfo({
        ...info,
        experienceInfo: {
          ...info.experienceInfo,
          [newExperienceKey]: emptyExperienceInfo
        }
      });
    }
  }

  function deleteButtonClicked(index, category) {
    const updatedInfo = {...info};
    delete updatedInfo[category][index];
    setInfo({
      ...updatedInfo,
    });
  }

  return (
    <div className="App">
      <h1>CV Creator</h1>
      <form>
        <fieldset>
          <legend>Personal Information</legend>
          <PersonalInfo info={info.personalInfo} onInputChange={updatePersonalInfo}/>
        </fieldset>
        <fieldset>
          <legend>Education Information</legend>
          <EducationInfo info={info.educationInfo} onInputChange={updateEducationInfo} onDeleteButtonClick={deleteButtonClicked} />
          <button type="button" onClick={() => addButtonClicked('education')}>Add</button>
        </fieldset>
        <fieldset>
          <legend>Experience Information</legend>
          <ExperienceInfo info={info.experienceInfo} onInputChange={updateExperienceInfo} onDeleteButtonClick={deleteButtonClicked} />
          <button type="button" onClick={() => addButtonClicked('experience')}>Add</button>
        </fieldset>
      </form>
      <CV info={info}/>
    </div>
  );
}

export default App;
