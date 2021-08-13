import React, { useEffect, useState } from "react";
import { List, Avatar } from "antd";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'

import axios from "axios";

import PageControls from "./PageControls/PageControls.";
import Spinner from "../UI/Spinner/Spinner";
import classes from "./Users.module.css";
function Users() {
  const [page, setPage] = useState(1);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    setLoading(true);
    setError(false);

    axios
      .get("https://reqres.in/api/users", {
        params: { page: page },
      })
      .then((res) => {
        if (res.status === 200) {
          console.log(res.data.data);
          setUsers(res.data.data);
          setLoading(false);
          setHasMore(res.data.total_pages > page);
        } else {
          throw new Error("Something Went Wrong");
        }
      })
      .catch((e) => {
        console.log(e);
        setLoading(false);
        setError(true);
      });
  }, [page]);

  const nextPage = () => {
    if (hasMore) {
      setPage((prev) => prev + 1);
    }
  };
  const prevPage = () => {
    if (page > 1) {
      setPage((prev) => prev - 1);
    }
  };

  let component = (
    <div className={classes.Spinner}>
      <Spinner />
    </div>
  );

  if (!loading) {
    component = (
      <List
        style={{ width: "100%" }}
        itemLayout="vertical"
        dataSource={users}
        size="large"
        renderItem={(item) => (
          <List.Item style={{ backgroundColor: "#eef3f8", margin: "0.5rem", "borderRadius":"0.8rem"}}>
            <List.Item.Meta
              avatar={<Avatar src={item.avatar} />}
              title={
                <a href="https://ant.design">{`${item.first_name} ${item.last_name}`}</a>
              }
              description={item.email}
            />
          </List.Item>
        )}
      />
    );
  }
  if (error) {
    component = <div>Somthing went Wrong</div>;
  }
  return (
    <div className={classes.Users}>
      {component}
      <PageControls
        page={page}
        loading={loading}
        hasMore={hasMore}
        next={nextPage}
        prev={prevPage}
      />
    </div>
  );
}

export default Users;
// https://reqres.in/api/users?page=2
