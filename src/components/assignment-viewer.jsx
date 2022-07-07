import React, { Component } from 'react';
import "./assignment-viewer.css";
class AssignmentViewer extends Component {
    openQuestion = (evt, QuestionName) => {

        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.getElementById(QuestionName).style.display = "block";
        evt.currentTarget.className += " active";

    }
    componentDidMount() {
        document.getElementById("defaultOpen").click();
    }


    render() {
        return (
            <div>
                <div className="tab">
                    <button className="tablinks" onClick={(e) => this.openQuestion(e, 'Question1')} id="defaultOpen">Question1
                    </button>
                    <button className="tablinks" onClick={(e) => this.openQuestion(e, 'Question2')}>Question2</button>
                    <button className="tablinks" onClick={(e) => this.openQuestion(e, 'Question3')}>Question3</button>
                </div>

                <div id="Question1" className="tabcontent">
                    <div className="column">
                        <h4>Part A</h4>
                        <p>Write some code that delivers the following features in a clean, clear, and reusable way.
                            <ol>
                                <li>Determines whether a given number is prime (whose only factors are 1 and the number
                                    itself). The approach you take should not use any library functions that provide
                                    pre-built prime related maths functions.
                                </li>
                                <li>If the number is not prime, capture the factors in some appropriate data structure,
                                    and output them.
                                </li>
                                <li>If the number is prime - output the string ‘Prime!’.</li>
                            </ol>
                            Hint: one way of determining if a number is prime, is to first calculate the factors of a
                            number, and then to look at the number of factors found. To determine if a number is a
                            factor of another, use the modulus operator (%) that gives the remainder of a division
                            operation - a remainder of 0 means that the number is a factor.
                            In other words, 10 % 3 == 1 ( 3 goes into 10, thrice times (3 + 3 + 3 == 9), with a
                            remainder of 1 (10 - 1) ). 3 is not a factor of 10.
                            10 % 5 == 0 (5 goes into 10 twice (5 + 5), with no remainder - 5 is a factor of 10!
                        </p>
                        <h4>Extension</h4>
                        <p>
                            If you have time, extend your application to calculate all the prime numbers in a given
                            range.
                            In other words, given a min of 10 and a max of 20, your code should return a structure
                            representing 11, 13, 17, 19.
                        </p>
                        <h4>Part B</h4>
                        <p>
                            Create a web interface for the problem outlined above. The interface should facilitate the
                            user to enter a number, or specify the bounds of the range that will be considered for
                            prime-ness. The page should update itself with the results of the requested operation.
                            Your solution should include any CSS / HTML / JavaScript you feel is helpful to create a
                            good user experience.
                        </p>
                    </div>
                </div>

                <div id="Question2" className="tabcontent">
                    <div className="column">
                        <h4>Part A</h4>
                        <p>Write code that models (in other words, represents) a collection of people (E.g., a club,
                            class, or company). The code you write should be clean, simple, and reusable.
                            Each person in the set of people has 2 properties:
                            <ul>
                                <li>A name</li>
                                <li>An age</li>
                            </ul>
                            You may initialise the collection with 4 hard coded users:
                            <ul>
                                <li>Alice, age 20</li>
                                <li>Bob, age 25</li>
                                <li>Carol, age 30</li>
                                <li>Dave, age 35</li>
                            </ul>
                            Your code should calculate and output:
                            <ol>
                                <li>The average age</li>
                                <li>The oldest person in the collection</li>
                                <li>The youngest person in the collection</li>
                            </ol>
                        </p>
                        <h4>Part B</h4>
                        <p>Create a website that presents the data modelled above. The website should be implemented in
                            your choice of backend and / or front-end framework - E.g., React, Laravel, Spring, ASP.NET
                            MVC etc. You may use a CSS framework. </p>

                        <p>Store the collection data in the HTTP session when the session is first initialised. If you
                            prefer, you may implement storage of the data in a DB (with accompanying migrations etc).
                            The site should consist of 2 pages:</p>

                        <p>Page 1 - Details the collection as a whole (I.e., lists all users, and the data listed above
                            in 1 - 3).
                            Page 2 - Detail page for an individual user.</p>

                        <p>You should endeavour to use best web practises (E.g., dynamically generated URLs, reusing
                            page layouts, clear separation of concerns between view & controller etc.)</p>
                        <h4>Extension</h4>
                        <p>
                            Implement a form to enable a new user - Eve, age 40 to be added to the group. Once added,
                            your code will automatically recalculate & re-generate the output (1-3). Note: you should
                            avoid copy / paste code duplication.
                        </p>

                    </div>
                </div>

                <div id="Question3" className="tabcontent">
                    <div className="column">
                        <h4>Part A</h4>
                        <p>Write code that models (in other words, represents) a car showroom. The OO code you write
                            should be clean, simple, and reusable. The car showroom has a number of cars for sale, and
                            each car should have a few properties.
                            <p>Each car should have a few properties:</p>
                            <ul>
                                <li>A make</li>
                                <li>A price</li>
                                <li>Year of manufacture</li>
                            </ul>
                            You may initialise the showroom with 4 hard coded vehicles:
                            <ul>
                                <li>Aston Martin, £50K, 2012</li>
                                <li>BMW, £30K, 2014</li>
                                <li>Chevrolet, £20K, 2013</li>
                                <li>Datsun, £2K, 2001</li>
                            </ul>
                            Your code should calculate and output:
                            <ol>
                                <li>The average price of a car</li>
                                <li>The oldest car in the collection</li>
                                <li>The most expensive car in the collection</li>
                            </ol>
                        </p>
                        <h4>Part B</h4>
                        <p>Create a website that presents the data modelled above. The website should be implemented in
                            your choice of backend and / or front-end framework - E.g., React, Laravel, Spring, ASP.NET
                            MVC etc. You may use a CSS framework.</p>
                        <p>Store the collection data in the HTTP session when the session is first initialised. If you
                            prefer, you may implement storage of the data in a DB (with accompanying migrations etc).
                            The site should consist of 2 pages:</p>
                        <p>Page 1 - Details the collection as a whole (I.e., lists all cars in the showroom, and the
                            data calculated above in 1 - 3).
                            Page 2 - Detail page for an individual car.</p>

                        <p>You should endeavour to use best web practises (E.g., dynamically generated URLs, reusing
                            page layouts, clear separation of concerns between view & controller etc.).</p>
                        <h4>Extension</h4>
                        <p>
                            Implement a form to enable a new car - Jaguar, £14K, 1999 - to be added to the showroom.
                            Once added, your code will automatically recalculate & re-generate the output (1-3). Note:
                            you should avoid copy / paste code duplication. </p>

                    </div>

                </div>

            </div>
        );
    }
}

export default AssignmentViewer;
