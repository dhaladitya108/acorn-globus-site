<template>
  <nav id="nav-bar" class="header py-5">
    <div
      class="container d-flex align-items-center justify-content-between w-100"
    >
      <div id="logo" c lass="logo">
        <img
          src="@/assets/images/acorn-globus-logo.svg"
          alt="Company Logo"
          width="150px"
        />
      </div>
      <input class="menu-btn" type="checkbox" id="menu-btn" />
      <label class="menu-icon" for="menu-btn"
        ><span class="navicon"></span
      ></label>
      <ul class="nav-items menu">
        <li class="nav-list-item">
          <a href="#hero" class="nav-item-link current-active">Home</a>
        </li>
        <li class="nav-list-item">
          <a href="#services" class="nav-item-link">Services</a>
        </li>
        <li class="nav-list-item">
          <a href="#projects" class="nav-item-link">Projects</a>
        </li>
        <li class="nav-list-item">
          <a href="#our-team" class="nav-item-link">Team</a>
        </li>
        <li class="nav-list-item">
          <a href="#cta" class="nav-item-link">Contact</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style>
#nav-bar {
  height: 40px;
  width: 100%;
  padding: 5px 2px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  position: relative;
  z-index: 10;
}
#logo:hover {
  cursor: pointer;
}
.nav-items {
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  font-weight: 600;

  margin-bottom: 0;
}
.nav-list-item {
  list-style-type: none;
}
.nav-item-link {
  color: white;
  margin: 0px 10px;
  font-size: 1rem;
  line-height: 24px;
  text-decoration: none;
}
.current-active {
  color: red;
}
.nav-item-link:hover {
  transition: 0.3s ease-in-out;
  color: red;
}
#social-connect {
  width: 15%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  color: white;
  align-items: center;
  cursor: pointer;
  font-size: 18px;
}
#social-connect i:hover {
  transition: 0.3s ease-out;
  color: red;
}
.header .menu-icon,
.header .menu-btn {
  display: none;
}

@media screen and (max-width: 768px) {
  #nav-bar {
    background-color: var(--clr-primary);
  }

  .nav-items {
    width: 56%;
  }

  .nav-item-link {
    font-size: 15px;
  }
}

@media screen and (max-width: 620px) {
  .nav-items {
    display: none;
  }
  #social-connect {
    display: none;
  }
}
</style>
