import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { TopicWrapper, TopicItem } from '../style';

class Topic extends PureComponent {
  render() {
    const { topicList } = this.props;
    return (
      <TopicWrapper>
        {
          topicList.map((item) => {
            return (
              <TopicItem key={item.get('id')}>
                <img src={item.get('imgUrl')} className="topic-pic" alt={item.get('title')}/>
                {item.get('title')}
              </TopicItem>
            )
          })
        }
      </TopicWrapper>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    topicList: state.getIn(['home','topicList'])
  }
};

export default connect(mapStateToProps)(Topic);