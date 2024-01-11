import '../styles/logs-table.css';

const LogsPage = () => (
    <>

    <table className='logs-table'>
        <thead>
            <tr>
                <th>Week Number</th>
                <th>Explanation of the Task</th>
                <th>Task Priority</th>
                <th>Task Status</th>
                <th>Sprint Number</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>Identifying the initial requirements for the project</td>
                <td>High</td>
                <td>Done</td>
                <td>1</td>
            </tr>
            <tr>
                <td>2</td>
                <td>Research about finding a good and optimal dataset</td>
                <td>High</td>
                <td>Done</td>
                <td>1</td>
            </tr>
            <tr>
                <td>3</td>
                <td>Research about object detection algorithms</td>
                <td>High</td>
                <td>Done</td>
                <td>1</td>
            </tr>
            <tr>
                <td>6</td>
                <td>Implementing the YOLOV8</td>
                <td>High</td>
                <td>Done</td>
                <td>2</td>
            </tr>
            <tr>
                <td>4</td>
                <td>Implementing the Faster RCNN to evaulate its accuracy gain over YOLOV8</td>
                <td>Medium</td>
                <td>Done</td>
                <td>2</td>
            </tr>
            <tr>
                <td>5</td>
                <td>Implementing the Retina Net to evaulate its accuracy gain over YOLOV8</td>
                <td>Medium</td>
                <td>Done</td>
                <td>2</td>
            </tr>
            <tr>
                <td>7</td>
                <td>Research about object tracking algorithms</td>
                <td>High</td>
                <td>Done</td>
                <td>3</td>
            </tr>
            <tr>
                <td>8</td>
                <td>Implementation of ByteTrack and Supervision inference</td>
                <td>High</td>
                <td>Done</td>
                <td>3</td>
            </tr>
            <tr>
                <td>9</td>
                <td>Research about finding small objects since our confidence level for ball is relatively low</td>
                <td>High</td>
                <td>In Progress</td>
                <td>3</td>
            </tr>
            <tr>
                <td>10</td>
                <td>Detailed research about swin transformer</td>
                <td>Low</td>
                <td>Done</td>
                <td>4</td>
            </tr>
            <tr>
                <td>11</td>
                <td>Detailed research about swin transformer</td>
                <td>Low</td>
                <td>Done</td>
                <td>4</td>
            </tr>
            <tr>
                <td>12</td>
                <td> Implementation of color masking with Open-CV</td>
                <td>High</td>
                <td>Done</td>
                <td>4</td>
            </tr>
            <tr>
                <td>13</td>
                <td>Implementation of color masking with Open-CV continued</td>
                <td>High</td>
                <td>Done</td>
                <td>5</td>
            </tr>
            <tr>
                <td>14</td>
                <td>Implementation of interpolation started to guess the location of ball in missing frames</td>
                <td>High</td>
                <td>In Progress</td>
                <td>5</td>
            </tr>
        </tbody>
    </table>

    </>
)

export default LogsPage;
