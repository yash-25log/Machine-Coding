const ProgressBar = ({value = 0} ) => {
    <div className="progress">
        <span >
            {value.toFixed()};
        </span>
    </div>     
}

export default ProgressBar
