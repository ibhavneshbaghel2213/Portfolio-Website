import React from "react";

import "./About2.scss"

import AboutHead from "./AboutHead"


import { Link } from "react-router-dom";

const About2 = () => {
    return (
        <>
            <div className="about2">
                <AboutHead></AboutHead>
                <div className="aboutContent">
                    <div className="aboutMe">
                    <p>I'm Bhavnesh Baghel, Enthusiastic Developer/Devops with two years’ experience in Python, DevOps, Shell Scripting. Skilled in fetching and cleaning data, building APIs, Automation,CI/CD , and web crawling.</p><p>With a Bachelor's degree in Computer Science and a strong GPA, I am committed to continuous learning and professional growth. I am seeking opportunities to leverage my skills and contribute to the success of DevOps, SRE and cloud engineering projects.</p><p> I am currently employed as a DevOps Engineer.</p><p>I am a certified professional in DevOps, Data Science, and Development, with a strong foundation in modern technologies that drive innovation and efficiency in today's digital landscape.</p><p>Have experience working with tools such as Jenkins, Terraform, and Ansible to streamline development processes and ensure efficient code deployment. Proficient in managing and monitoring cloud infrastructure services on AWS and GCP, as well as maintaining high availability in Kubernetes-based container clusters. Successfully implemented monitoring and logging tools like ELK, Grafana, and Datadog to ensure comprehensive visibility into system performance and implemented GitOps for managing infrastructure as code. My expertise also includes integrating automation testing into the CI/CD pipeline and developing scripts to automate tasks, improving efficiency and reducing manual effort. </p><p>Beyond my professional pursuits, I enjoy exploring emerging technologies, engaging in outdoor and indoor games, and pursuing adventure through travel and adrenaline-pumping sports.</p><p>I'm dedicated to making valuable contributions to the technology industry while continuously growing my expertise.</p>
                    </div>
                    <div className="expirence">
                        <div className="boxContainer">
                            <h2>Python Developer</h2>
                            <p>KycHub</p>
                            <p>December/22 - November/08</p>
                            <p>developed a Python-based web application to integrate data from multiple sources.</p>
                            <p>Extensive Hands-On Utilization of Automation Tools including Ansible.</p>
                            <p>Working on Data Quality Analysis, Data Preparation, and Data Modeling using Python.</p>
                            <p>Experience in creating images for docker from Docker files.</p>
                            <p>Created Lambda Function detect long running instance and Send details on Slack.</p>

                        </div>
                        <div className="boxContainer">
                            <h2>DevOps Engineer</h2>
                            <p>Opstree</p>
                            <p>January/12 - Present</p>
                            <p>Responsible for designing, implementing, and supporting of cloud-based infrastructure and its solutions using
 AWS services like VPC ,IAM, EC2, S3, ELB, EFS, ROUTE53, CDN and cloud watch.</p>
 <p>Created and configured load balancers and auto scaling groups to distribute the traffic and to have a cost
 efficient, fault tolerant and highly available environment and also provide SSL certificate through ACM for
 secure access.</p>
 <p>Write Terraform scripts and Managed infrastructure automation using Terraform.</p>
 <p>Implementing Continuous Integration involving GitHub and Jenkins Build Jobs for complete automation
 from commit to deployment.</p>
 <p>Integrated multiple checksum within the CI/CD pipeline.</p>
 <p>Established clear monitoring goals, selected and deployed appropriate tools such as Prometheus for metrics
 and Grafana for visualization, and configured logging solutions for efficient troubleshooting.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About2