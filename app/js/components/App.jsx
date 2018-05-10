import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ChatBot from 'react-simple-chatbot';

const BMI = (props) => {
  const { steps } = props;
  const queries = steps.queries.value;
  const bmi = 30;
  let result = 'Nil';
  let result_url = '<a href="http://www.yahoo.com">';

  if ((queries.toLowerCase().indexOf('top') != -1) || (queries.toLowerCase().indexOf('word cloud') != -1)){
    return (
    <div className="test">
      Your dashboard <a href="page1.html" target="myIframe0"><img src='download.png'/></a>
    </div>
    );
  } else if (queries.toLowerCase().indexOf('competitor') != -1){
    return (
    <div className="test">
      Your dashboard <a href="page2.html" target="myIframe0"><img src='download.png'/></a>
    </div>
    );
  }

return (
    <div className="test">
    Your dashboard <a href="default.html" target="myIframe0"><img src='download.png'/></a>
    </div>
    );
  
};

BMI.propTypes = {
  steps: PropTypes.object,
};

BMI.defaultProps = {
  steps: undefined,
};

class BMIExample extends Component {
  render() {
    function validator(value) {
      

      return true;
    }

    return (
      <ChatBot
        steps={[
          {
            id: '1',
            message: 'Welcome to PCCW Solutions chatbot!',
            trigger: '2',
          },
          {
            id: '2',
            message: 'What can I help you? (e.g.: Please provide me brand risk analysis.)',
            trigger: 'queries',
          },
          {
            id: 'queries',
            user: true,
            trigger: '5',
            validator,
          },
                    {
            id: '5',
            message: 'Please click the following report URL. Thanks',
            trigger: '6',
          },
          {
            id: '6',
            component: <BMI />,
            trigger: '2',
            //end: true,
          },
        ]}
      />
    );
  }
}

export default BMIExample;