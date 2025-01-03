import { RedisClient } from "../../../shared/redis";
import { EVENT_ACADEMIC_DEPARTMENT_DELETED } from "../academicDepartment/academicDepartment.constants";
import { EVENT_ACADEMIC_SEMESTER_CREATED, EVENT_ACADEMIC_SEMESTER_UPDATED } from "./academicSemester.constant";
import { IAcademicSemesterCreatedEvent } from "./academicSemester.interface";
import { AcademicSemesterService } from "./academicSemester.service";

// const initAcademicSemesterEvents = () => {
//     RedisClient.subscribe(EVENT_ACADEMIC_SEMESTER_CREATED, async (e: string) => {
//         const data: IAcademicSemesterCreatedEvent = JSON.parse(e);

//         await AcademicSemesterService.createSemesterFromEvent(data);
//         console.log(data);
//     });

//     RedisClient.subscribe(EVENT_ACADEMIC_SEMESTER_UPDATED, async (e: string) => {
//         const data = JSON.parse(e);
//         await AcademicSemesterService.updateOneIntoDBFromEvent(data);
//         //console.log("Updated data: ", data);
//     });

//     RedisClient.subscribe(EVENT_ACADEMIC_SEMESTER_DELETED, async (e: string) => {
//         const data = JSON.parse(e);

//         await AcademicSemesterService.deleteOneFromDBFromEvent(data.id);
//     });
// };


const initAcademicSemesterEvents = () => {
    RedisClient.subscribe(EVENT_ACADEMIC_SEMESTER_CREATED, async(e:string) =>{
        const data:IAcademicSemesterCreatedEvent = JSON.parse(e)
        await AcademicSemesterService.createSemesterFromEvent(data)
        console.log(data)
        
    })
    RedisClient.subscribe(EVENT_ACADEMIC_SEMESTER_UPDATED, async(e:string) =>{
        const data = JSON.parse(e)
        await AcademicSemesterService.updateOneIntoDBFromEvent(data);
        console.log('Update data', data)
        
    })

    RedisClient.subscribe(EVENT_ACADEMIC_DEPARTMENT_DELETED, async(e:string) =>{
        const data = JSON.parse(e)
        await AcademicSemesterService.deleteOneFromDBFromEvent(data)

        console.log('Delete data', data)
    })
}

export default initAcademicSemesterEvents;