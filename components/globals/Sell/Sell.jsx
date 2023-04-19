import React,{useContext, useState} from 'react'
import styles from './Sell.module.scss'
import { makes,models } from "../../../utils/staticData";
import Select from '../Select/Select';
import Selectables from '../Selectables/Selectables';
import Input from '../input/Input';
import BMW from "../../../public/BMW.png";
import Volkswagen from "../../../public/Volkswagen.png";
import Volvo from "../../../public/Volvo.png";
import Audi from "../../../public/Audi.png";
import Mercedes from "../../../public/Mercedes.png";
import Kia from "../../../public/Kia.png";
import SelectableWithImage from '../Selectables/SelectableWithImage';
import Button from '../button/Button';
import FileUploader from '../fileUploader/FileUploader';
import AlertContext from '../../../context/Alert/AlertContext';

function Sell() {
    const [formData, setFormData] = useState({
        make:makes[1],
        model: models[1].model,
        price: null,
        firstRegistration: null,
        power: null,
        mileage: null,
        fuel: "Petrol",
        gearbox: "Manual",
        description: "",
        accidentDamaged:"Non-Accidental",
        cubicCapacity:null,
        condition: "New",
        airbags:'N/A',
        centalLocking:'N/A',
        seatUpholstry:'N/A',
        sunroof:'N/A',
        musicSystem:'N/A',
        rearAC:'N/A',
        orvm:'N/A',
        powerWindows:'N/A',
        engineStartStop:'N/A',
        headLamps:'N/A',
        engineType:'N/A',
        steeringType:'N/A',
        seatingCapacity:'N/A',
        fuelCapacity:null,
        kmpl:null,
        files:null
    });
    
    const carImageArr = [
        { value: "BMW", img: BMW },
        { value: "AUDI", img: Audi },
        { value: "MERCEDES-BENZ", img: Mercedes },
        { value: "VOLVO", img: Volvo },
        { value: "VW", img: Volkswagen },
        { value: "KIA", img: Kia },
      ];
    const {make,model,seatUpholstry,
    sunroof,
    musicSystem,
    rearAC,
    fuelCapacity,
    orvm,
    powerWindows,
    engineStartStop,
    headLamps,
    centalLocking,
    airbags,
    fuel,
    condition,
    gearbox,
    firstRegistration,
    accidentDamaged,
    mileage,
    kmpl,
    power,
    cubicCapacity,
    price,
    engineType,
    steeringType,
    seatingCapacity,
    files} = formData;

    const {createAlert} = useContext(AlertContext);

    const handleChange = (field) => (event) => {
        if(field === 'make') {
        setFormData({...formData,make:event.target.value,model:models.find(model => model.make === event.target.value).model});
        }
        else
        setFormData({ ...formData, [field]: event.target.value });
    };

    const validateFormData = () => {
        for (let i=0; i<formData["files"].length; i++){
            if(formData["files"][i].size/1000000 > 2) createAlert(`File size cannot be greater than 2MB`,"E")
        }
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        validateFormData();
    }

    const features =[
        {
            options:['N/A','2','4','6'],
            value:airbags,
            onClick:handleChange('airbags'),
            name:'Airbags',
        },
        {   
            options:['N/A','Yes','No'],
            value:centalLocking,
            onClick:handleChange('centalLocking'),
            name:'Cental Locking'
        },
        {
            options:['N/A','Leather','Nylon'],
            value:seatUpholstry,
            onClick:handleChange('seatUpholstry'),
            name:'Seat Upholstry'
        },
        {
            options:['N/A','Yes','No'],
            value:sunroof,
            onClick:handleChange('sunroof'),
            name:'Sunroof'
        },
        {
            options:['N/A','Yes','No'],
            value:musicSystem,
            onClick:handleChange('musicSystem'),
            name:'Music System'
        },
        {
            options:['N/A','Yes','No'],
            value:rearAC,
            onClick:handleChange('rearAC'),
            name:'Rear AC'
        },
        {
            options:['N/A','Yes','No'],
            value:orvm,
            onClick:handleChange('orvm'),
            name:'Outside Rear view mirrors'
        },
        {
            options:['N/A','Yes','No'],
            value:powerWindows,
            onClick:handleChange('powerWindows'),
            name:'Power Windows'
        },
        {
            options:['N/A','Yes','No'],
            value:engineStartStop,
            onClick:handleChange('engineStartStop'),
            name:'Engine Start Stop'
        },
        // {
        //     options:['N/A','Halogen','HID','LED'],
        //     value:headLamps,
        //     onClick:handleChange('headLamps'),
        //     name:'Headlamps'
        // }
    ]

    const specs =[
        {
            options:['N/A','Four-cylinder inline','Horizontally-opposed','Straight-Six','V6','V8'],
            value:engineType,
            onClick:handleChange('engineType'),
            name:'Engine Type'
        },
        {
            options:['N/A','1','2','3','4','5','6','7','8'],
            value:seatingCapacity,
            onClick:handleChange('seatingCapacity'),
            name:'Seating Capacity'
        },
        {
            options:['N/A','hydraulic power steering (HPS)','the electric power hydraulic steering (EPHS)','and the fully electric power steering (EPS)'],
            value:steeringType,
            onClick:handleChange('steeringType'),
            name:'Steering type'
        },
    ]
  return (
    <div className={styles.container}>
        <h2>Sell your Car</h2>
        <div className={styles.subContainer}>

        {/* <div className={styles.left}>
        <a className={styles.nav} href='#basic'>
          Basic details
        </a>
        <a className={styles.nav} href='#history'>
          Historical Details
        </a>
        <a className={styles.nav} href='#features'>
          Features
        </a>
        <a className={styles.nav} href='#specs'>
          Specifications
        </a>
        </div> */}

        <form onSubmit={e=>handleSubmit(e)} encType="multipart/form-data">
        <div className={styles.section}>
            <h3>Basic Details</h3>
            <div id='basic' className={styles.anchor}></div>
            <hr />
           <SelectableWithImage
            options={carImageArr}
            value={make}
            onClick={handleChange('make')}
            name={'Popular Brands'}
           /> 
           <Select
            options={makes.slice(1).map(make=> make)}
            value={make}
            onChange={handleChange("make")}
            name='Make'
            />
            <Select
            options={models.slice(1).filter(model=> model.make===make).map(model => model.model)}
            value={model}
            onChange={handleChange("model")}
            name='Model'
            />  
            <Selectables 
            options={['Manual','Automatic']}
            value={gearbox}
            onClick={handleChange('gearbox')}
            name='Transmission type'
            />
            <Selectables 
            options={['Petrol','Diesel','CNG','Electric']}
            value={fuel}
            onClick={handleChange('fuel')}
            name='Fuel'
            />
            <Input 
            name='Price (€)' 
            value={price} 
            type='number' 
            onChange={handleChange('price')}
            placeholder='Price (€)'
            min="1"
            />
            <Input 
            name='Kms Driven (Km)' 
            value={mileage} 
            type='number' 
            onChange={handleChange('mileage')}
            placeholder='Kms Driven (km)'
            min="1"
            />
            <Input 
            name='Power (HP)' 
            value={power}
            type='number' 
            onChange={handleChange('power')}
            placeholder='Power (HP)'
            min="1"/>
            <Input 
            name='Cubic Capacity (CC)' 
            value={cubicCapacity}
            type='number' 
            onChange={handleChange('cubicCapacity')}
            placeholder='Cubic Capacity (CC)'
            min="1"
            />
            <FileUploader onChange ={(e)=>{setFormData({...formData,files:e.target.files})}} name='Upload Files' files={files}/>
        </div>
        <div className={styles.section}>
        <h3>Historical Details</h3>
        <div id='history' className={styles.anchor}></div>
        <hr />
            <Selectables 
            options={['Accidental','Non-Accidental']}
            value={accidentDamaged}
            onClick={handleChange('accidentDamaged')}
            name='Accidental Damage'
            />
            <Selectables 
            options={['New','Old']}
            value={condition}
            onClick={handleChange('condition')}
            name='Condition'
            />
            <Input 
            type='date'
            name="First Registration"
            value={firstRegistration}
            onChange={handleChange('firstRegistration')}
            />
        </div>
        <div className={styles.section}>
        <h3>Features (Can be Edited later)</h3>
        <div id='features' className={styles.anchor}></div>
        <hr />
            <div className={styles.grid_2}>
            {features.map(({options,value,onClick,name}) =>
            <Selectables 
            options={options}
            value={value}
            onClick={onClick}
            name={name}
            />)}
            </div>
        </div>
        <div className={styles.section}>
        <h3>Specifications (Can be Edited later)</h3>
        <div id='specs' className={styles.anchor}></div>
        <hr />
            {specs.map(({options,value,onClick,name}) =>
            <Selectables 
            options={options}
            value={value}
            onClick={onClick}
            name={name}
            />)}
            <Input 
            name='Fuel Capacity (L)' 
            value={fuelCapacity} 
            type='number' 
            onChange={handleChange('fuelCapacity')}
            placeholder='Fuel Capacity (L)'
            min="1"
            />
            <Input 
            name='KMPL' 
            value={kmpl} 
            type='number' 
            onChange={handleChange('kmpl')}
            placeholder='KMPL'
            min="1"
            />
        </div>
        <Button type='submit'>Create Ad</Button>
        </form>
        </div>
    </div>
  )
}

export default Sell