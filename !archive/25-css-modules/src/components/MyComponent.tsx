import styles from './MyComponent.module.scss'

const MyComponent = () => {
  console.log(styles)
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <h1 className={'text-center'}>Hello, CSS Modules</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aperiam, autem culpa dolor, doloribus eaque facere fugit laudantium modi non nulla praesentium, quae qui quisquam sequi soluta temporibus unde veniam?</p>
      </div>
    </div>
  )
}

export default MyComponent
