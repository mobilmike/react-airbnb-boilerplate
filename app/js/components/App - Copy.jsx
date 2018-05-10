import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ChatBot from 'react-simple-chatbot';

class Review extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      gender: '',
      age: '',
    };
  }

  componentWillMount() {
    const { steps } = this.props;
    const { name, gender, age } = steps;

    this.setState({ name, gender, age });
  }

  render() {
    const { name, gender, age } = this.state;
    return (
      <div style={{ width: '100%' }}>
        <h3>Summary</h3>
        <table>
          <tbody>
            <tr>
              <td>Name</td>
              <td>{name.value}</td>
            </tr>
            <tr>
              <td>Gender</td>
              <td>{gender.value}</td>
            </tr>
            <tr>
              <td>Age</td>
              <td>{age.value}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

Review.propTypes = {
  steps: PropTypes.object,
};

Review.defaultProps = {
  steps: undefined,
};

class SimpleForm extends Component {
  render() {
    return (
      <ChatBot
        headerTitle="PCCW Solutions Chatbot"
        steps={[
          {
            id: '1',
            message: 'Hi, what is your name?',
            trigger: 'name',
          },
          {
            id: 'name',
            user: true,
            validator: (value) => {
              if (value){
                user_name = value;
              }
              return true;
            },
            trigger: '3',
          },
          {
            id: '3',
            message: 'Hi {user_name}! What can I help you? (Example: please give me a report of top 5 word in own brand risk analysis)',
            trigger: 'report-new',
          },
          {
            id: 'report-new',
            user: true,
            validator: (value) => {
              if (value.match(/top 5/g)) {
                //return "<a href=\"javascript:document.getElementById('myIframe0').style.display='none'\">Top 5 word in own brand risk analysis</a>";
              }
              return true;
            },
            trigger: '5a',
          },
          {
            id: 'report',
            options: [
              { value: 'brand', label: 'Top 5 word in own brand risk analysis', trigger: '5a' },
              { value: 'campaign', label: 'Best campaign within Feb', trigger: '5b' },
              { value: 'competitors', label: 'Positive feedback for all competitors', trigger: '5c' },
            ],
          },
          {
            id: '5a',
            component: (
    <a href="https://47.89.10.22/single/?appid=10a1e416-88b8-41fa-989f-3e88ff85dc65&sheet=9f1718fc-838b-4ef8-98a2-b8d75a8d4509&bookmark=05f3452c-e1c8-4c2d-b0f2-18b5108e7110&opt=currsel&select=clearall"  target="myIframe0">Top 5 word in own brand risk analysis</a>
             ),
            trigger: '3',
          },
          {
            id: '5b',
            component: (
    <a href="https://47.89.10.22/single/?appid=10a1e416-88b8-41fa-989f-3e88ff85dc65&sheet=9f1718fc-838b-4ef8-98a2-b8d75a8d4509&bookmark=f67290d4-c513-462e-b269-b88d69a2c884&opt=currsel&select=clearall" target="myIframe0">Best campaign within Feb</a>
             ),
            trigger: '3',
          },
          {
            id: '5c',
            component: (
    <a href="https://47.89.10.22/single/?appid=10a1e416-88b8-41fa-989f-3e88ff85dc65&sheet=9f1718fc-838b-4ef8-98a2-b8d75a8d4509&bookmark=c4269a57-d368-448c-b2d0-1d3d794dfbab&opt=currsel&select=clearall" target="myIframe0">Positive feedback for all competitors</a>
             ),
            trigger: '3',
          },
          {
            id: 'age',
            user: true,
            trigger: '7',
            validator: (value) => {
              if (isNaN(value)) {
                return 'value must be a number';
              } else if (value < 0) {
                return 'value must be positive';
              } else if (value > 120) {
                return `${value}? Come on!`;
              }

              return true;
            },
          },
          {
            id: '7',
            message: 'Great! Check out your summary',
            trigger: 'review',
          },
          {
            id: 'review',
            component: <Review />,
            asMessage: true,
            trigger: 'update',
          },
          {
            id: 'update',
            message: 'Would you like to update some field?',
            trigger: 'update-question',
          },
          {
            id: 'update-question',
            options: [
              { value: 'yes', label: 'Yes', trigger: 'update-yes' },
              { value: 'no', label: 'No', trigger: 'end-message' },
            ],
          },
          {
            id: 'update-yes',
            message: 'What field would you like to update?',
            trigger: 'update-fields',
          },
          {
            id: 'update-fields',
            options: [
              { value: 'name', label: 'Name', trigger: 'update-name' },
              { value: 'gender', label: 'Gender', trigger: 'update-gender' },
              { value: 'age', label: 'Age', trigger: 'update-age' },
            ],
          },
          {
            id: 'update-name',
            update: 'name',
            trigger: '7',
          },
          {
            id: 'update-gender',
            update: 'gender',
            trigger: '7',
          },
          {
            id: 'update-age',
            update: 'age',
            trigger: '7',
          },
          {
            id: 'end-message',
            message: 'Thanks! Your data was submitted successfully!',
            end: true,
          },
        ]}
      />
    );
  }
}

export default SimpleForm;