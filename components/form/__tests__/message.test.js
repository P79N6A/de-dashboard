import React from 'react';
import { mount } from 'enzyme';
import Form from '..';

describe('Form', () => {
  it('support error message with reactNode', () => {
    let myForm;
    const Form1 = Form.create()(({ form }) => {
      myForm = form;
      return (
        <Form>
          <Form.Item label="Account">{form.getFieldDecorator('account')(<input />)}</Form.Item>
        </Form>
      );
    });

    const wrapper = mount(<Form1 />);

    myForm.setFields({
      account: {
        errors: [<div>Error 1</div>, <div>Error 2</div>],
      },
    });

    expect(wrapper.render()).toMatchSnapshot();
  });
});

// describe('Form', () => {
//   it('should display two message', () => {
//     const rules = [
//       {
//         pattern: /^\w+$/,
//         message: 'Error message 1',
//       },
//       {
//         pattern: /^\w+$/,
//         message: 'Error message 2',
//       },
//     ];
//     let myForm;
//     const Form1 = Form.create()(({ form }) => {
//       myForm = form;
//       return (
//         <Form>
//           <Form.Item label="Account">
//             {form.getFieldDecorator('account', { initialValue: '+=-/', rules })(<input />)}
//           </Form.Item>
//         </Form>
//       );
//     });

//     const wrapper = mount(<Form1 />);
//     myForm.validateFields();

//     wrapper.update();
//     expect(wrapper.render()).toMatchSnapshot();
//   });

//   it('should display custom message', () => {
//     const rules = [
//       {
//         pattern: /^$/,
//         message: (
//           <span>
//             Account does not exist,{' '}
//             <a rel="noopener noreferrer" href="https://www.alipay.com/" target="_blank">
//               Forgot account?
//             </a>
//           </span>
//         ),
//       },
//     ];
//     let myForm;
//     const Form1 = Form.create()(({ form }) => {
//       myForm = form;
//       return (
//         <Form>
//           <Form.Item label="Account">
//             {form.getFieldDecorator('account', { initialValue: 'antd', rules })(<input />)}
//           </Form.Item>
//         </Form>
//       );
//     });

//     const wrapper = mount(<Form1 />);
//     myForm.validateFields();

//     wrapper.update();
//     expect(wrapper.render()).toMatchSnapshot();
//   });

//   it('support error message with reactNode', () => {
//     let myForm;
//     const Form1 = Form.create()(({ form }) => {
//       myForm = form;
//       return (
//         <Form>
//           <Form.Item label="Account">{form.getFieldDecorator('account')(<input />)}</Form.Item>
//         </Form>
//       );
//     });

//     const wrapper = mount(<Form1 />);

//     myForm.setFields({
//       account: {
//         errors: [<div>Error 1</div>, <div>Error 2</div>],
//       },
//     });

//     expect(wrapper.render()).toMatchSnapshot();
//   });
// });
