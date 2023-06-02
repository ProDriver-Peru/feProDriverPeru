# Front End Pro Driver Perú

## Structure
```
raiz
	login /login
		sign-in
		sign-out
		sign-up
	layout
		layout-header
		layout-menu
		layout-panel

		home /home
			home-driver
                (dialog) offer-preview
			home-employer
                (dialog) create-offer
		search /search
			search-results /results
				(profile embebido)search-profile /profile
				/:id
		---(OJO)---
		profile /profile
			profile-driver
			/:id
			(dialog) notify

		my-profile /my-profile
			profile-edit /edit
		---(OJO)---

    notifications /notifications
		  listar
      /:id

		offers /offers
			offers-driver (aplicadas)
            /offers-applied
                /:id
			offers-employer (creada)
            /offers-made
                /:id
```

## Commands CLI
```
ng g c component/home --skip-tests   
ng g c component/login --skip-tests
ng g c component/layout
ng g c component/layout --skip-tests
ng g c component/layout/layout-header --skip-tests
ng g c component/layout/layout-menu --skip-tests   
ng g c component/layout/layout-panel --skip-tests 
ng g c component/layout/home --skip-tests         
ng g c component/layout/home/home-driver --skip-tests 
ng g c component/layout/home/home-employer --skip-tests 
ng g c component/layout/search --skip-tests             
ng g c component/layout/search/search-results --skip-tests 
ng g c component/layout/profile --skip-tests               
ng g c component/layout/profile/profile-driver --skip-tests 
ng g c component/layout/my-profile/profile-edit --skip-tests 
ng g c component/layout/notifications --skip-tests           
ng g c component/layout/offers --skip-tests        
ng g c component/layout/offers-driver --skip-tests 
ng g c component/layout/offers-employer --skip-tests 
ng g c component/layout/offers-employer/offers-made --skip-tests 
ng g c component/layout/offers-driver/offers-applied --skip-tests
```
