// Work experience section
// Will use timeline component
// Use same styling as all the other sections
import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import puroLogo from "./../assets/puro-icon.jpeg"
import waterlooIcon from "./../assets/UWaterloo-icon.png"
import blackberryIcon from "./../assets/Blackberry-icon.jpeg"


export default function WorkExp() {
    return (
        <section id="workexp">
            <div className="container px-5 py-10 mx-auto text-center lg:px-40">
                <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
                    Work Experience
                </h1>
                <VerticalTimeline layout="1-column-left" lineColor="grey">

                    <VerticalTimelineElement

                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(2 132 199)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(2 132 199)' }}
                        date="September 2022 - Present"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        icon={<img src={puroLogo} alt="puroLogo" />}
                    >
                        {/*adding small pill buttons above the heading to showcase the languages used, left aligned to the timeline element*/}
                        <div className="flex flex-wrap justify-left">
                            <span className="inline-flex items-center justify-center px-3 py-1 mr-2 mb-2 text-xs font-medium leading-6 text-white uppercase transition bg-emphasis-blue rounded-full shadow ripple hover:shadow-lg hover:opacity-75 focus:outline-none">
                                Python
                            </span>
                            <span className="inline-flex items-center justify-center px-3 py-1 mr-2 mb-2 text-xs font-medium leading-6 text-white uppercase transition bg-emphasis-blue rounded-full shadow ripple hover:shadow-lg hover:opacity-75 focus:outline-none">
                                AWS Glue
                            </span>
                            <span className="inline-flex items-center justify-center px-3 py-1 mr-2 mb-2 text-xs font-medium leading-6 text-white uppercase transition bg-emphasis-blue rounded-full shadow ripple hover:shadow-lg hover:opacity-75 focus:outline-none">
                                SQL
                            </span>
                            <span className="inline-flex items-center justify-center px-3 py-1 mr-2 mb-2 text-xs font-medium leading-6 text-white uppercase transition bg-emphasis-blue rounded-full shadow ripple hover:shadow-lg hover:opacity-75 focus:outline-none">
                                AWS Redshift
                            </span>
                            <span className="inline-flex items-center justify-center px-3 py-1 mr-2 mb-2 text-xs font-medium leading-6 text-white uppercase transition bg-emphasis-blue rounded-full shadow ripple hover:shadow-lg hover:opacity-75 focus:outline-none">
                                Spark
                            </span>
                            <span className="inline-flex items-center justify-center px-3 py-1 mr-2 mb-2 text-xs font-medium leading-6 text-white uppercase transition bg-emphasis-blue rounded-full shadow ripple hover:shadow-lg hover:opacity-75 focus:outline-none">
                                AWS Lambda
                            </span>
                            <span className="inline-flex items-center justify-center px-3 py-1 mr-2 mb-2 text-xs font-medium leading-6 text-white uppercase transition bg-emphasis-blue rounded-full shadow ripple hover:shadow-lg hover:opacity-75 focus:outline-none">
                                AWS EventBridge
                            </span>
                        </div>

                        <h3 className="title-font sm:text-2xl text-3xl font-medium text-white text-left">Cloud Enablement Data Engineer</h3>
                        <h4 className="sm:text-2xl mb-3 font-small text-white text-left">Purolator Inc. </h4>
                        <h6 className="leading-relaxed text-left">
                            In charge of the Analytics team migration to AWS and PowerBI.
                            Building the data pipeline to track discrepancies between generated orders and picked up orders.
                        </h6>

                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(33, 41, 54)', color: '#fff' }}
                        date="September 2022 - Present"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        icon={<img src={waterlooIcon} alt="waterlooIcon" />}
                    >
                        <div className="flex flex-wrap justify-left">
                            <span className="inline-flex items-center justify-center px-3 py-1 mr-2 mb-2 text-xs font-medium leading-6 text-white uppercase transition bg-rgb(33, 41, 54) rounded-full shadow ripple hover:shadow-lg hover:opacity-75 focus:outline-none">
                                Python
                            </span>
                            <span className="inline-flex items-center justify-center px-3 py-1 mr-2 mb-2 text-xs font-medium leading-6 text-white uppercase transition bg-rgb(33, 41, 54) rounded-full shadow ripple hover:shadow-lg hover:opacity-75 focus:outline-none">
                                TensorFlow
                            </span>
                            <span className="inline-flex items-center justify-center px-3 py-1 mr-2 mb-2 text-xs font-medium leading-6 text-white uppercase transition bg-rgb(33, 41, 54) rounded-full shadow ripple hover:shadow-lg hover:opacity-75 focus:outline-none">
                                Numpy
                            </span>
                            <span className="inline-flex items-center justify-center px-3 py-1 mr-2 mb-2 text-xs font-medium leading-6 text-white uppercase transition bg-rgb(33, 41, 54) rounded-full shadow ripple hover:shadow-lg hover:opacity-75 focus:outline-none">
                                OpenCV
                            </span>
                            <span className="inline-flex items-center justify-center px-3 py-1 mr-2 mb-2 text-xs font-medium leading-6 text-white uppercase transition bg-rgb(33, 41, 54) rounded-full shadow ripple hover:shadow-lg hover:opacity-75 focus:outline-none">
                                WhisperAI
                            </span>
                        </div>
                        <h3 className="title-font sm:text-2xl text-3xl  font-medium text-white text-left">Waterloo Data Science Researcher</h3>
                        <h4 className="sm:text-2xl mb-3 font-small text-white text-left">Project X Waterloo</h4>
                        <h6 className="leading-relaxed text-left">
                            Currently writing a research paper that creates a deep learning ensemble model for Human Computer Interaction advancements with AI
                        </h6>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(33, 41, 54)', color: '#fff' }}
                        date="May 2022 - September 2022"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        icon={<img src={waterlooIcon} alt="waterlooIcon" />}
                    >
                        <div className="flex flex-wrap justify-left">
                            <span className="inline-flex items-center justify-center px-3 py-1 mr-2 mb-2 text-xs font-medium leading-6 text-white uppercase transition bg-rgb(33, 41, 54) rounded-full shadow ripple hover:shadow-lg hover:opacity-75 focus:outline-none">
                                C++
                            </span>
                            <span className="inline-flex items-center justify-center px-3 py-1 mr-2 mb-2 text-xs font-medium leading-6 text-white uppercase transition bg-rgb(33, 41, 54) rounded-full shadow ripple hover:shadow-lg hover:opacity-75 focus:outline-none">
                                Python
                            </span>
                            <span className="inline-flex items-center justify-center px-3 py-1 mr-2 mb-2 text-xs font-medium leading-6 text-white uppercase transition bg-rgb(33, 41, 54) rounded-full shadow ripple hover:shadow-lg hover:opacity-75 focus:outline-none">
                                OpenCV
                            </span>
                            <span className="inline-flex items-center justify-center px-3 py-1 mr-2 mb-2 text-xs font-medium leading-6 text-white uppercase transition bg-rgb(33, 41, 54) rounded-full shadow ripple hover:shadow-lg hover:opacity-75 focus:outline-none">
                                RobotOS
                            </span>
                            <span className="inline-flex items-center justify-center px-3 py-1 mr-2 mb-2 text-xs font-medium leading-6 text-white uppercase transition bg-rgb(33, 41, 54) rounded-full shadow ripple hover:shadow-lg hover:opacity-75 focus:outline-none">
                                Point Cloud Library
                            </span>
                        </div>
                        <h3 className="title-font sm:text-2xl text-3xl  font-medium text-white text-left">Undergraduate Research</h3>
                        <h4 className="sm:text-2xl mb-3 font-small text-white text-left">Social and Intelligent Robots Laboratory Waterloo</h4>
                        <h6 className="leading-relaxed text-left">
                            Implemented C++ Point Cloud Library in conjunction with OpenCV for semantic segmentation of 3D Point Cloud Data to generate dimensions for the Fetch Robot
                        </h6>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(33, 41, 54)', color: '#fff' }}
                        date="January 2022 - April 2022"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        icon={<img src={blackberryIcon} alt="blackberryIcon" />}                         >
                        <div className="flex flex-wrap justify-left">
                            <span className="inline-flex items-center justify-center px-3 py-1 mr-2 mb-2 text-xs font-medium leading-6 text-white uppercase transition bg-rgb(33, 41, 54) rounded-full shadow ripple hover:shadow-lg hover:opacity-75 focus:outline-none">
                                Python
                            </span>
                            <span className="inline-flex items-center justify-center px-3 py-1 mr-2 mb-2 text-xs font-medium leading-6 text-white uppercase transition bg-rgb(33, 41, 54) rounded-full shadow ripple hover:shadow-lg hover:opacity-75 focus:outline-none">
                                TensorFlow
                            </span>
                            <span className="inline-flex items-center justify-center px-3 py-1 mr-2 mb-2 text-xs font-medium leading-6 text-white uppercase transition bg-rgb(33, 41, 54) rounded-full shadow ripple hover:shadow-lg hover:opacity-75 focus:outline-none">
                                Docker
                            </span>
                            <span className="inline-flex items-center justify-center px-3 py-1 mr-2 mb-2 text-xs font-medium leading-6 text-white uppercase transition bg-rgb(33, 41, 54) rounded-full shadow ripple hover:shadow-lg hover:opacity-75 focus:outline-none">
                                Bash
                            </span>
                            <span className="inline-flex items-center justify-center px-3 py-1 mr-2 mb-2 text-xs font-medium leading-6 text-white uppercase transition bg-rgb(33, 41, 54) rounded-full shadow ripple hover:shadow-lg hover:opacity-75 focus:outline-none">
                                SQL
                            </span>
                        </div>
                        <h3 className="title-font sm:text-2xl text-3xl  font-medium text-white text-left">Machine Learning Engineer</h3>
                        <h4 className="sm:text-2xl mb-3 font-small text-white text-left">Blackberry</h4>
                        <h6 className="leading-relaxed text-left">
                            Implemented a VM resource monitoring system in Linux using Grafana and Prometheus which was deployed using Docker and Bash Scripts.
                            Designed and optimized a static analysis tool checker for improving false-positive code classifications to improve developer productivity by 85% using an efficient Random Forest and Category Boosting blended classifier through Tensorflow.
                            Used AutoML infrastructure and complex SQL joins and dynamic pivots for data engineering.
                            Identified critical data logic flaws that were mislabeling the training data and designed a safe and fault-free data processing pipeline using SQL and Pandas.
                            Optimised Jenkins Pipeline running an NLP model for open source license classification.
                        </h6>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(33, 41, 54)', color: '#fff' }}
                        date="May 2021 - August 2021"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                                       >
                        <div className="flex flex-wrap justify-left">
                            <span className="inline-flex items-center justify-center px-3 py-1 mr-2 mb-2 text-xs font-medium leading-6 text-white uppercase transition bg-rgb(33, 41, 54) rounded-full shadow ripple hover:shadow-lg hover:opacity-75 focus:outline-none">
                                Python
                            </span>
                            <span className="inline-flex items-center justify-center px-3 py-1 mr-2 mb-2 text-xs font-medium leading-6 text-white uppercase transition bg-rgb(33, 41, 54) rounded-full shadow ripple hover:shadow-lg hover:opacity-75 focus:outline-none">
                                TensorFlow
                            </span>
                            <span className="inline-flex items-center justify-center px-3 py-1 mr-2 mb-2 text-xs font-medium leading-6 text-white uppercase transition bg-rgb(33, 41, 54) rounded-full shadow ripple hover:shadow-lg hover:opacity-75 focus:outline-none">
                                ReactJS
                            </span>
                            <span className="inline-flex items-center justify-center px-3 py-1 mr-2 mb-2 text-xs font-medium leading-6 text-white uppercase transition bg-rgb(33, 41, 54) rounded-full shadow ripple hover:shadow-lg hover:opacity-75 focus:outline-none">
                                PowerBI
                            </span>
                            <span className="inline-flex items-center justify-center px-3 py-1 mr-2 mb-2 text-xs font-medium leading-6 text-white uppercase transition bg-rgb(33, 41, 54) rounded-full shadow ripple hover:shadow-lg hover:opacity-75 focus:outline-none">
                                SQL
                            </span>
                        </div>
                        <h3 className="title-font sm:text-2xl text-3xl  font-medium text-white text-left">AI/ML/NLP Data Scientist</h3>
                        <h4 className="sm:text-2xl mb-3 font-small text-white text-left">Genellipse Inc.</h4>
                        <h6 className="leading-relaxed text-left">
                            Designed and optimized a prediction neural network using TensorFlow and AutoML that predicts potential client customers, increasing sales efficiency and resource allocation.
                            Improved prediction using hyperparameter tuning, custom metrics, data stratification and early stopping, resulting in a 94.8% accurate model.
                            Designed an automation process software for Death Benefit Calculations for Life Insurance, using a custom data schema.
                        </h6>
                    </VerticalTimelineElement>


                </VerticalTimeline>
            </div>
        </section>
    );
}




