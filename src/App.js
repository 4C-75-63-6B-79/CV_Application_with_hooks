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

function loadExampleData() {
  const exampleInfo = {
    personalInfo: {
      firstName: 'Betty',
      lastName: 'Luke',
      address: '10880 Malibu Point, 90265',
      email: 'realmailaddress@googlemail.com',
      phoneNo: '9007007007',
    },
    educationInfo: {
      education0: {
        degree: 'Bachelor\'s',
        school: 'The Best School In the World',
        city: 'Madripoor',
        subject: 'Adventure Education',
        start: 'May, 2015',
        end: 'April, 2019'
      },
      education1: {
        degree: 'Master\'s',
        school: 'The Second Best School In the World',
        city: 'Madripoor',
        subject: 'Cannabis Biology and Chemistry',
        start: 'July, 2019',
        end: 'April, 2021'
      }
    },
    experienceInfo: {
      experience0: {
        position: "Postion",
        company: "Company Name",
        city: "City",
        start: "May, 2022",
        end: "December, 2022",
      }
    }
  }
  return exampleInfo;
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

  function updateExperienceInfo(index, attributeName, attributeValue) {
    setInfo({
      ...info,
      experienceInfo: {
        ...info.experienceInfo,
        [index]: {
          ...info.experienceInfo[index],
          [attributeName]: attributeValue
        }
      }
    });
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

  function loadExampleButtonClicked() {
    setInfo(loadExampleData());
  }

  function resetButtonClicked() {
    setInfo(makeInitialInfo());
  }

  return (
    <div className="App">
      <h1 id="mainAppTitle">CV Creator</h1>
      <form>
        <fieldset>
          <legend>Personal Information</legend>
          <section>
            <PersonalInfo info={info.personalInfo} onInputChange={updatePersonalInfo}/> 
          </section>
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
        <button type="button" onClick={loadExampleButtonClicked}>Load Example</button>
        <button type="button" onClick={resetButtonClicked}>Reset</button>
      </form>
      <CV info={info}/>
    </div>
  );
}

export default App;
