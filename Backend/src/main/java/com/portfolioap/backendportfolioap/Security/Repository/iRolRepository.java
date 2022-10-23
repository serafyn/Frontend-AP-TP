package com.portfolioap.backendportfolioap.Security.Repository;

import com.portfolioap.backendportfolioap.Security.Entity.Rol;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface iRolRepository extends JpaRepository<Rol, Integer> {
    
}
