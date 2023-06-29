import { useFormik } from 'formik';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { BookingTimesContext } from '../App';
import API from '../util/api';
import * as Yup from 'yup';
import {VStack, FormControl, Input, FormErrorMessage, FormLabel, Select} from '@chakra-ui/react';

export default function BookingForm(props) {
    const {availableTimes, setAvailableTimes} = React.useContext(BookingTimesContext);
    const navigate = useNavigate()

    // const [time, setTime] = React.useState("");
    // let [date, setDate] = React.useState("");
    // let [name, setName] = React.useState("");
    // let [email, setEmail] = React.useState("");
    // let [occasion, setOccasion] = React.useState("");
    // let [guests, setGuests] = React.useState("");

    
    const formik = useFormik({
        initialValues: {
          name: "",
          email: "",
          date: "",
          time: "",
          guests: "2",
          occasion: "Birthday",
        },
        // handleChange: () =>{},
        onSubmit: (values) => {
            const submitted = API.submitAPI(values);
            if(submitted){
                navigate('/booking-confirmed')
            }
        },
        validationSchema: Yup.object({
          name: Yup.string().required('Required'),
          email: Yup.string().email('Invalid email address').required('Required'),
          date: Yup.string().required('Required'),
          time: Yup.string(),//.test("please choose a different time", (v)=>availableTimes.includes(v)),
          guests: Yup.number().required('Required').moreThan(1, "Minimum 2 guests"),
          occasion: Yup.string().required('Required'),
        }),
      });
      function handleDateChange(o) {
        const v = o.currentTarget.value;
        formik.setValues({...formik.values, date:v})
        setAvailableTimes(v);
    }
    return (
        <form style={{display:"grid", maxWidth:200, gap:20}} onSubmit={formik.handleSubmit}>
            <VStack spacing={8}>
              <FormControl isInvalid={formik.errors.name && formik.touched.name}>
                <FormLabel htmlFor="name">Name</FormLabel>
                <Input
                  id="name"
                  name="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                />
                <FormErrorMessage>{formik.errors.name}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={formik.errors.email && formik.touched.email}>
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                />
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={formik.errors.date && formik.touched.date}>
                <FormLabel htmlFor="date">Date</FormLabel>
                <Input
                  id="date"
                  name="date"
                  type="date"
                  value={formik.values.date}
                  onChange={handleDateChange}
                />
                <FormErrorMessage>{formik.errors.date}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={formik.errors.time && formik.touched.time}>
                <FormLabel htmlFor="time">Choose time</FormLabel>
                <Select name="time" id="time" value={formik.values.time} onChange={formik.handleChange}>
                    {availableTimes.map((t)=> <option key={t}>{t}</option>)}
                </Select>
                <FormErrorMessage>{formik.errors.time}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={formik.errors.guests && formik.touched.guests}>
                <FormLabel htmlFor="guests">guests</FormLabel>
                <Input
                  id="guests"
                  name="guests"
                  type="number"
                  value={formik.values.guests}
                  onChange={formik.handleChange}
                />
                <FormErrorMessage>{formik.errors.guests}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={formik.errors.occasion && formik.touched.occasion}>
                <FormLabel htmlFor="occasion">occasion</FormLabel>
                <Select name="occasion" value={formik.values.occasion} onChange={formik.handleChange}>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </Select>
                <FormErrorMessage>{formik.errors.occasion}</FormErrorMessage>
              </FormControl>
                <input type="submit" value="Make Your reservation" role="button" className="button"/>
            </VStack>
           
         </form>
    )
}

