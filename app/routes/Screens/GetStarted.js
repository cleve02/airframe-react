import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withPageConfig } from
    '../../components/Layout/withPageConfig';
import _ from 'lodash';

import {
    Container,
    Wizard,
    Card,
    Nav,
    NavItem,
    NavLink,
    CardFooter,
    CardBody,
    Button,
    Row,
    Col,
    Table,
    Form,
    FormGroup,
    Input,
    Label,
} from './../../components';

import { HeaderMain } from "../components/HeaderMain";
const sequence = ['your-cart', 'shipping', 'payment', 'summary'];


const WizardStep1 = () => (
    <Row>
        <Col md={ 6 }>
            <div>
                <h3 className="mb-4">
                    Your Bags are Ready to Check Out!
                </h3>
                <p>
                    Discover goods you&apos;ll love from brands that inspire.
                    The easiest way to open your own online store.
                    Discover amazing stuff or open your own store for free!
                </p>
                <small>
                    Below is a sample page for your cart, 
                    Created using pages design UI Elementes
                </small>
            </div>
        </Col>
        <Col md={ 6 }>
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Description</th>
                        <th>Qty</th>
                        <th className="text-right">Total</th>
                    </tr>
                </thead>

            </Table>
        </Col>
    </Row>
);
const WizardStep2 = () => (
    <Row>
        <Col md={6}>
            <div>
                <h3 className="mb-4">
                    Your Information is Safe with Us!
                </h3>
                <p>
                    We respect your privacy and protect it with strong encryption, plus strict policies.
                    Two-step verification, which we encourage all our customers to use.
                </p>
                <small>
                    Fields marked as <span className="text-danger">*</span> are Required!
                </small>
            </div>
        </Col>
        <Col md={6}>
            <Form>
                <h6 className="pb-3">
                    Name and Email Address
                </h6>
                <Row className="pb-4">
                    <Col sm={6}>
                        <FormGroup>
                            <Label for="firstName">
                                First Name <span className="text-danger">*</span>
                            </Label>
                            <Input
                                id="firstName" 
                                placeholder='First Name...'
                            />
                        </FormGroup>
                    </Col>
                    <Col sm={6}>
                        <FormGroup>
                            <Label for="lastName">
                                Last Name <span className="text-danger">*</span>
                            </Label>
                            <Input
                                id="lastName" 
                                placeholder='Last Name...'
                            />
                        </FormGroup>
                    </Col>
                    <Col sm={12}>
                        <FormGroup>
                            <Label for="email">
                                Email <span className="text-danger">*</span>
                            </Label>
                            <Input id="email" placeholder='Email address...'/>
                        </FormGroup>
                    </Col>
                </Row>
            </Form>
        </Col>
    </Row>
);
const WizardStep3 = () => (
    <Row>
        <Col md={6}>
            <div>
                <h3 className="mb-4">
                    We Secured Your Line
                </h3>
                <p className="pb-3">
                    Below is a sample page for your cart , Created using pages design UI Elementes.
                </p>
            </div>
        </Col>
        <Col md={6}>
            <Nav pills className="pb-3">
                <NavItem>
                    <NavLink href="#" active>
                        Credit Card
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">
                        PayPal
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">
                        Skrill
                    </NavLink>
                </NavItem>
            </Nav>

            <Card>
                <CardBody>
                    <div className="d-flex justify-content-between align-items-center pb-3">
                        <h5>Credit Card</h5>
                        <div className="d-flex align-items-start">
                            <i className="fa fa-lg fa-cc-visa text-primary mr-1"></i>
                            <i className="fa fa-lg fa-cc-mastercard text-muted mr-1"></i>
                            <i className="fa fa-lg fa-cc-jcb text-muted mr-1"></i>
                        </div>
                    </div>
                    <Form>
                        <FormGroup>
                            <Label for="cardHolder">
                                Card Holder&apos;s Name <span className="text-danger">*</span>
                            </Label>
                            <Input id="cardHolder" placeholder='Name on the card...'/>
                        </FormGroup>
                    </Form>
                </CardBody>
            </Card>
        </Col>
    </Row>
);
const WizardStep4 = () => (
    <Row>
        <Col md={6}>
            <div>
                <h3 className="mb-4">
                    Summary
                </h3>
                <p className="mb-5">
                    Below is a sample page for your cart , Created using pages design UI Elementes.
                </p>
                <small>Invoice are issued on the date of despatch. Payment terms: Pre-orders: within 10 days of invoice date with 4% discount, from the 11th to the 30th day net. Re-orders: non-reduced stock items are payable net after 20 days.</small>

            </div>
        </Col>
        <Col md={6}>
            <h6 className="mb-3 mt-2">Name and Email Address</h6>

            <Row tag="dl">
                <dt className="col-sm-4">First Name</dt>
                <dd className="col-sm-8">John</dd>

                <dt className="col-sm-4">Last Name</dt>
                <dd className="col-sm-8">Novoselic</dd>

                <dt className="col-sm-4">Email</dt>
                <dd className="col-sm-8">john@novoselic.com</dd>

                <dt className="col-sm-4"></dt>
                <dd className="col-sm-8">
                    <Button color='link' className="p-0"><i className="fa fa-angle-left mr-1"></i> Change</Button>
                </dd>
            </Row>
        </Col>
    </Row>
);


class NavbarOnly extends React.Component {
    static propTypes = {
        pageConfig: PropTypes.object
    };

    componentDidMount() {
        const { pageConfig } = this.props;
        
        pageConfig.setElementsVisibility({
            sidebarHidden: true
        });
    }

    componentWillUnmount() {
        const { pageConfig } = this.props;

        pageConfig.setElementsVisibility({
            sidebarHidden: false
        });
    }

    state = {
        currentStep: _.first(sequence)
    }


    render() {
        const { currentStep } = this.state;

        return (
            <Container>
                <HeaderMain 
                    title="Get Started"
                    className="my-4"
                />
                <Card>
                    <CardBody className="d-flex justify-content-center pt-5">
                        <Wizard
                            activeStep={ currentStep }
                            onStepChanged={ this._changeStep }
                        >
                            <Wizard.Step
                                id={ sequence[0] }
                                icon={ <i className="fa fa-shopping-basket fa-fw"></i> }
                                complete={ this._isComplete(sequence[0]) }
                            >
                                Your Cart
                            </Wizard.Step>
                            <Wizard.Step
                                id={ sequence[1] }
                                icon={ <i className="fa fa-cube fa-fw"></i> }
                                complete={ this._isComplete(sequence[1]) }
                            >
                                Shipping
                            </Wizard.Step>
                            <Wizard.Step
                                id={ sequence[2] }
                                icon={ <i className="fa fa-credit-card fa-fw"></i> }
                                complete={ this._isComplete(sequence[2]) }
                            >
                                Payment
                            </Wizard.Step>
                            <Wizard.Step
                                id={ sequence[3] }
                                icon={ <i className="fa fa-navicon fa-fw"></i> }
                                complete={ this._isComplete(sequence[3]) }
                            >
                                Summary
                            </Wizard.Step>
                        </Wizard>
                    </CardBody>

                    <CardBody className="p-5">
                    {
                        (() => {
                            switch(this.state.currentStep) {
                                case sequence[0]:
                                    return <WizardStep1 />
                                case sequence[1]:
                                    return <WizardStep2 />
                                case sequence[2]:
                                    return <WizardStep3 />
                                case sequence[3]:
                                    return <WizardStep4 />
                            }
                        })()
                    }
                    </CardBody>

                    <CardFooter className="p-4 bt-0">
                        <div className="d-flex">
                            {
                                currentStep !== sequence[0] && (
                                    <Button onClick={() => {this._prevStep()}} color="link" className='mr-3'>
                                        <i className='fa fa-angle-left mr-2'></i>
                                        Previous
                                    </Button>
                                )
                            }
                            {
                                currentStep !== sequence[sequence.length - 1] && (
                                    <Button color='primary' onClick={() => {this._nextStep()}} className="ml-auto px-4">
                                        Next
                                        <i className='fa fa-angle-right ml-2'></i>
                                    </Button>
                                )
                            }
                        </div>
                    </CardFooter>
                </Card>
            </Container>
        );
    }

    _changeStep = (stepId) => {
        this.setState({
            currentStep: stepId
        });
    }

    _prevStep = () => {
        const index = sequence.indexOf(this.state.currentStep);
        this.setState({
            currentStep: sequence[index - 1]
        });
    }

    _nextStep = () => {
        const index = sequence.indexOf(this.state.currentStep);
        this.setState({
            currentStep: sequence[index + 1]
        });
    }

    _isComplete = (stepId) =>
        sequence.indexOf(stepId) < sequence.indexOf(this.state.currentStep)
}

const ExtendedNavbarOnly = withPageConfig(NavbarOnly);

export {
    ExtendedNavbarOnly as GetStarted
};
