import '../styles/logs-table.css';

const LogsPage = () => (
    <>
   
    {/* <div className="logs-table-container">

        <table className="logs-table">

            <thead className='table-head'>
                <tr>
                    <th>Task Name</th>
                    <th>Task Definition</th>
                    <th>Task Priority</th>
                    <th className='table-border-right'>Task Status</th>
                </tr>
            </thead>

            <tbody>

                <tr className="task-row">
                    <td className='table-border-left'>Web page creation</td>
                    <td>Implementation of the web page for uploading reports</td>
                    <td>High</td>
                    <td className='table-border-right'>Done</td>
                </tr>
                <tr className="task-row">
                    <td className='table-border-left'>Updating web page</td>
                    <td>Updating the web site with new reports</td>
                    <td>Medium</td>
                    <td className='table-border-right'>In Progress</td>
                </tr>
                <tr className="task-row">
                    <td className='table-border-left'>Image Processing Colour Detection</td>
                    <td>Distracting colour specification and detection</td>
                    <td>High</td>
                    <td className='table-border-right'>In Progress</td>
                </tr>
                <tr className="task-row">
                    <td className='table-border-left'>Mobile application UI/UX design</td>
                    <td>Designing the application’s pages by using Canva design application.</td>
                    <td>High</td>
                    <td className='table-border-right'>In Progress</td>
                </tr>
                <tr className="task-row">
                    <td className='table-border-left'>Login, Register & Forget Password Firebase Entegration for App</td>
                    <td>Firebase integration will be made into the application for mail confirmation, password change and tracking of users.</td>
                    <td>High</td>
                    <td className='table-border-right'>In Progress</td>
                </tr>
                <tr className="task-row">
                    <td className='table-border-left'>Creation of Mobile Application General Skeleton</td>
                    <td>Creating the general outline and file layouts of the application</td>
                    <td>High</td>
                    <td className='table-border-right'>Not Started</td>
                </tr>
                <tr className="task-row">
                    <td className='table-border-left'>Database creation</td>
                    <td>Creating a database with necessary tables</td>
                    <td>Low</td>
                    <td className='table-border-right'>Not Started</td>
                </tr>
                <tr className="task-row">
                    <td className='table-border-left'>Application design entegration</td>
                    <td>Adding the created screen designs to the application step by step</td>
                    <td>Medium</td>
                    <td className='table-border-right'>Not Started</td>

                </tr>
                <tr className="task-row">
                    <td className='table-border-left'>Image processing object detection</td>
                    <td>Distracting objects specification and implementation of the detection</td>
                    <td>Medium</td>
                    <td className='table-border-right'>Not Started</td>

                </tr>
                <tr className="task-row">
                    <td className='table-border-left'>Backend dev.</td>
                    <td>Creating the necessary methods and integrations between the database</td>
                    <td>High</td>
                    <td className='table-border-right'>Not Started</td>

                </tr>
                <tr className="task-row">
                    <td className='table-border-left'>Sound level meter and to-do list features</td>
                    <td>Adding sound level meter and to-do list features to the app</td>
                    <td>High</td>
                    <td className='table-border-right'>Not Started</td>

                </tr>
                <tr className="task-row">
                    <td className='table-border-left'>Study assistant feature </td>
                    <td>Adding the study assistant feature to the application</td>
                    <td>Medium</td>
                    <td className='table-border-right'>Not Started</td>

                </tr>
                <tr className="task-row">
                    <td className='table-border-left'>Working environment photo analysis feature </td>
                    <td>Adding working environment photo analysis feature</td>
                    <td>High</td>
                    <td className='table-border-right'>Not Started</td>

                </tr>
                <tr className="task-row table-border-bottom">
                    <td className='table-border-left'>Mobile Application Tests</td>
                    <td>Testing the application and fixing it if there is a problem</td>
                    <td>Low</td>
                    <td className='table-border-right'>Not Started</td>

                </tr>

            </tbody>

        </table>

    </div> */}



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
                <td> Implementation of color masking with Open-CV,</td>
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
                <td>In progress</td>
                <td>5</td>
            </tr>
        </tbody>
    </table>



    </>
)

export default LogsPage;
