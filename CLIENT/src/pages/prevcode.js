 // {async (e) => {
            //     e.preventDefault();
            //     if (formType === 'login') {

            //         // return handleLogin(e, email, password, role);
            //         if (role === 'donar') {
            //             let res = await axios.get(`http://localhost:5000/donar?email=${email}`);
            //             let userData = res.data[0];
            //             console.log(userData);
            //             // If userData.length === 0 // No user Found
            //             // console.log(userData.password)
            //             if (userData.length === 0) { alert("No user") }
            //             // userData.password === password // navigate home screen 

            //             else if (userData.password === password) {
            //                 // alert("password match")
            //                 navigate('/');
            //             }
            //         }
            //         else if (role === 'admin') {
            //             let res1 = await axios.get(`http://localhost:5000/admin?email=admin@admin.com`)
            //             console.log(res1);
            //             navigate('/admin');

            //         }
            //         else if (role === 'organization') {
            //             let res2 = await axios.get(`http://localhost:5000/organization?email=${email}`);
            //             console.log(res2);
            //             navigate('/organization')
            //         }


            //         // If password not match error display 
            //     }
            //     else if (formType === 'register') {

            //         let donarData = {};
            //         let organizationData = {};
            //         try {
            //             if (role === "donar") {
            //                 donarData.role = role;
            //                 donarData.name = name;
            //                 donarData.email = email;
            //                 donarData.password = password;
            //                 donarData.address = address;
            //                 donarData.phone = phone;

            //                 console.log(donarData);

            //                 let res = axios.post("http://localhost:5000/donar", donarData);
            //                 alert("Registered Succesfully");
            //                 console.log(res);
            //             }
            //             else if (role === 'organization') {
            //                 organizationData.role = role;
            //                 organizationData.name = name;
            //                 organizationData.email = email;
            //                 organizationData.password = password;
            //                 organizationData.address = address;
            //                 organizationData.phone = phone;

            //                 console.log(organizationData);

            //                 let res = axios.post("http://localhost:5000/organization", organizationData);
            //                 alert("Registered Succesfully");
            //                 console.log(res);
            //             }
            //             // else if (role === 'hospital') {
            //             //     hospitalData.role = role;
            //             //     hospitalData.name = name;
            //             //     hospitalData.email = email;
            //             //     hospitalData.password = password;
            //             //     hospitalData.website = website;
            //             //     hospitalData.address = address;
            //             //     hospitalData.phone = phone;

            //             //     console.log(hospitalData);

            //             //     let res = axios.post("http://localhost:4000/hospital", hospitalData);
            //             //     console.log(res);
            //             // }
            //         }
            //         catch (error) {
            //             console.log(error);
            //         }

            //         // return handleRegister(e, name, role, email, password, phone, organizationName, address);
            //     }

            // }}