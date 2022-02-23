import React from 'react';
import ViewWrapper from '../ViewWrapper/ViewWrapper';

import { BsFileLock, BsSearch, BsFillBookmarkFill, BsArrowLeft } from 'react-icons/bs';
import { AiFillSetting } from 'react-icons/ai';
import style from './ViewNeomorphicForm.module.css';
import Button from './Button/Button';

function NeomorphicForm() {
  return (
    <ViewWrapper addStyle="secondStyle">
      <form className={style.form}>
        <div className={style.segment}>
          <h1>Sign up</h1>
        </div>

        <label>
          <input type="text" placeholder="Email Address" />
        </label>
        <label>
          <input type="password" placeholder="Password" />
        </label>
        <Button icon={<BsFileLock />} iconName="icon-lock" title="Log in" textBtn="Log in" styleRed />

        <div className={style.segment}>
          <Button icon={<BsArrowLeft />} iconName="back" title="back" />
          <Button icon={<BsFillBookmarkFill />} iconName="bookmark" title="bookmark" />
          <Button icon={<AiFillSetting />} iconName="settings" title="settings" />
        </div>

        <div className={style.inputGroup}>
          <label>
            <input type="text" placeholder="Email Address" />
          </label>
          <Button icon={<BsSearch />} iconName="search" title="search" />
        </div>
      </form>
    </ViewWrapper>
  );
}

export default NeomorphicForm;
