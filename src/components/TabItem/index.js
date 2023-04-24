import './index.css'

const TabItem = props => {
  const {tabItemDetails, isActive, selectedTabId} = props
  const {tabId, displayText} = tabItemDetails

  const tabClassName = isActive ? 'tab-button active' : 'tab-button'

  const onClickTabBtn = () => {
    selectedTabId(tabId)
  }

  return (
    <li className="tab-item">
      <button type="button" onClick={onClickTabBtn} className={tabClassName}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
