import React, { Fragment, Component } from "react";
import Header from "./components/Layouts/Header";
import Footer from "./components/Layouts/Footer";
import Excersice from "./components/Excercies";
import { muscles, exercises } from "../src/store";

export default class extends Component {
  state = {
    exercises,
    exercise:{}
  }


  getExercisesByMuscles() {
    return Object.entries(
      this.state.exercises.reduce((exercises, exercise) => {
        const { muscles } = exercise;

        exercises[muscles] = exercises[muscles]
          ? [...exercises[muscles], exercise]
          : [exercise];

        return exercises;
      }, {})
    );
  }

  handleCategorySelected = (category) =>{
    this.setState({
      category
    })
  }

  handleSelectedExercise = (id) =>{
    this.setState(({exercises}) => ({ exercise:exercises.find(ex => ex.id === id)}))
  }
  render() {
    const exercises = this.getExercisesByMuscles();
    const {category, exercise} = this.state;
    return (
      <Fragment>
        <Header />
        <Excersice exercises={exercises} category={category} onSelect={this.handleSelectedExercise} exercise={exercise}/>
        <Footer muscles={muscles} onSelect={this.handleCategorySelected} category={category}/>
      </Fragment>
    );
  }
}
