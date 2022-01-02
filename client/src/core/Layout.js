import React from "react";
import Menu from "./Menu";
import "../styles.css";

const Layout = ({
  title = "Title",
  description = "Description",
  className,
  children,
}) => (
  <div>
    <Menu />
    <div
      id="carouselExampleCaptions"
      class="carousel slide"
      data-ride="carousel"
    >
      <ol class="carousel-indicators">
        <li
          data-target="#carouselExampleCaptions"
          data-slide-to="0"
          class="active"
        ></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            src="https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            class="d-block w-100 banner__img"
            style={{ height: "46vh", objectFit: "cover" }}
            alt="product"
          />
          <div class="carousel-caption d-none d-md-block">
            <h2 className="display-3 banner__title">{title}</h2>
            <p className="banner__description">{description}</p>
          </div>
        </div>
        <div class="carousel-item">
          <img
            src="https://images.unsplash.com/photo-1626497764746-6dc36546b388?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1026&q=80"
            class="d-block w-100 banner__img"
            style={{ height: "46vh", objectFit: "cover" }}
            alt="product"
          />
          <div class="carousel-caption d-none d-md-block">
            <h2 className="display-3 banner__title">{title}</h2>
            <p className="banner__description">{description}</p>
          </div>
        </div>
        <div class="carousel-item">
          <img
            src="https://images.unsplash.com/photo-1523381294911-8d3cead13475?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            class="d-block w-100 banner__img"
            style={{ height: "46vh", objectFit: "cover" }}
            alt="product"
          />
          <div class="carousel-caption d-none d-md-block">
            <h2 className="display-3 banner__title">{title}</h2>
            <p className="banner__description">{description}</p>
          </div>
        </div>
      </div>
    </div>
    <div className={className}>{children}</div>
  </div>
);

export default Layout;
