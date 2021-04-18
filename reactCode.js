import React from "react";
import "../../fontawesome-free-5.15.2-web/css/all.css";
import "./style.css";
import testimonials from "./testimonials.json"; 

export const Presentational = (props) => {
  return (
    <Slide propies={props} />
  );
}

const Slide = (props) => {
  props = props.propies;
  onkeydown = (e) => props.switchSlide(e);

  return (
    <div className="Wrapper">
      <Image
        currentSlide = {props.currentSlide}
        switchSlide = {props.switchSlide}
      />
      <Quote
        currentSlide = {props.currentSlide}
      />
    </div>
  );
}

const Image = (props) => {
  return (
    <div className="img-flex-item">
      <div className="img-wrapper">
        <div className="img-div">
          <img 
            src={testimonials[props.currentSlide].picture} 
            alt={`${testimonials[props.currentSlide].name} picture`}
          />
        </div>
        <Switch
          switchSlide = {props.switchSlide}
        />
      </div>
    </div>
  );
}

const Switch = (props) => {
  return (
    <div className="switch-wrapper">
      <div className="switch-div">
        <ArrowButton 
          direction="left"
          switchSlide = {props.switchSlide}
        />
        <ArrowButton 
          direction="right"
          switchSlide = {props.switchSlide}
        />
      </div>
    </div>
  );
}

const ArrowButton = (props) => {
  return (
    <span 
      onClick={props.switchSlide.bind(this, `${props.direction}`)}
      className="arrow-button"
    >
      <i className={`fas fa-chevron-${props.direction}`}/>
    </span>
  );
}

const Quote = (props) => {
  return (
    <div className="quote-flex-item">
      <p className="quote">
        {testimonials[props.currentSlide].quote}
      </p>
      <div className="quote-author">
        <b>{testimonials[props.currentSlide].name}</b>
        <span>{testimonials[props.currentSlide].job}</span>
      </div>
    </div>
  );
}