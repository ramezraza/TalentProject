import React from 'react';
import Cookies from 'js-cookie';
import { Popup } from 'semantic-ui-react';
import moment from 'moment';
import { Pagination, Card, Button } from 'semantic-ui-react';

export class JobSummaryCard extends React.Component {
    constructor(props) {
        super(props);


        const jobs = props.jobs ?
            Object.assign({}, props.jobs)
            : {
                id: ''
            }

        this.state = {
            MyJobs: jobs,
            showJobs: false
        }

        this.loadJobs = this.loadJobs.bind(this)
        this.selectJob = this.selectJob.bind(this)
        this.renderDisplay = this.renderDisplay.bind(this)
        this.renderJobs = this.renderJobs.bind(this)
    }




    selectJob(id) {
        var cookies = Cookies.get('talentAuthToken');
        //url: 'http://localhost:51689/listing/listing/closeJob',

    }



    loadJobs() {

        console.log("data", this.props.jobs)
        const jobs = Object.assign({}, this.props.jobs)
        console.log("jobs are", jobs)
        const employerJobs = Object.values(jobs)



        console.log("employerJobs", employerJobs);

        if (employerJobs.length == 0) { alert("No Jobs Available") }
        else {
            this.setState({
                MyJobs: employerJobs,
                showJobs: true
            })

        }


    }






    render() {
        return (


            this.state.showJobs ? this.renderJobs() : this.renderDisplay()
        )

    }

    renderJobs() {
        return (
            <div className='row'>
                <div className="ui sixteen wide column">


                    {/* {JSON.stringify(this.props.jobs) }*/}

                    <Card.Group>

                        {this.state.MyJobs.map(job =>

                            <Card color='violet'>
                                <Card.Content>
                                    <Card.Header>Job Title : {job.title}</Card.Header>
                                    <Card.Meta> Job Summary : {job.summary}</Card.Meta>

                                </Card.Content>
                                <Card.Content extra>
                                    <Card.Description> Job Location : {job.location.city}</Card.Description>
                                    <Card.Description>Country : {job.location.country}</Card.Description>
                                </Card.Content>

                                <Card.Content extra>
                                    <Card.Meta> Status : {job.status} </Card.Meta>
                                    <Card.Meta>No Of Suggestions : {job.noOfSuggestions}</Card.Meta>

                                </Card.Content>
                                <Card.Content extra>
                                    <Button basic color='blue'>
                                        Update Job
                                    </Button>
                                    <Button basic color='red'>
                                        Close Job
                                    </Button>
                                </Card.Content>
                            </Card>

                        )}

                    </Card.Group>
                    <h1>  </h1>
                </div>
            </div>
        )
    }

    renderDisplay() {


        return (

            <button type="button" className="ui left floated teal button" onClick={this.loadJobs} >Show My Jobs</button>

        )



    }
}